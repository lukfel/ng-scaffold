import { MediaMatcher } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, REQUEST, inject } from '@angular/core';

/**
 * Viewports assumed during SSR. A request reveals a device class, never an actual viewport, and
 * CDK exposes only query strings, so these are plausible device sizes rather than derived values.
 * They have to keep landing in `Breakpoints.XSmall` and `Breakpoints.Large`, which the spec asserts.
 */
export const SSR_MOBILE_VIEWPORT = { width: 390, height: 844 };
export const SSR_DESKTOP_VIEWPORT = { width: 1280, height: 800 };

const MOBILE_USER_AGENT_REGEX = /Android|iPhone|iPod|Windows Phone|IEMobile|BlackBerry|Opera Mini/i;

/**
 * Answers media queries during SSR from the incoming request rather than matching nothing, so
 * breakpoint driven markup is server rendered for the requesting device class instead of always
 * falling back to desktop. On the browser it defers to the platform implementation.
 *
 * Opt in with `provideScaffold({ ssrBreakpoints: true })`. Doing so makes the SSR response depend
 * on the request, so whatever serves it must `Vary` on `Sec-CH-UA-Mobile` and `User-Agent` or a
 * cached mobile render will be handed to a desktop client.
 */
@Injectable()
export class ScaffoldMediaMatcher extends MediaMatcher {
  private platformId = inject(PLATFORM_ID);
  private request = inject(REQUEST, { optional: true });

  public override matchMedia(query: string): MediaQueryList {
    if (isPlatformBrowser(this.platformId)) return super.matchMedia(query);

    const { width, height } = this.isMobileRequest() ? SSR_MOBILE_VIEWPORT : SSR_DESKTOP_VIEWPORT;

    return {
      matches: matchesMediaQuery(query, width, height),
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    } as unknown as MediaQueryList;
  }

  // Sec-CH-UA-Mobile needs no Accept-CH opt in on Chromium; other browsers only give a User-Agent
  private isMobileRequest(): boolean {
    const headers: Headers | undefined = this.request?.headers;
    if (!headers) return false;

    const hint: string | null = headers.get('sec-ch-ua-mobile');
    if (hint) return hint.includes('?1');

    return MOBILE_USER_AGENT_REGEX.test(headers.get('user-agent') ?? '');
  }
}

/**
 * Evaluates the width and orientation parts of a media query against an assumed viewport.
 * Conditions a request cannot answer, such as `prefers-color-scheme`, never match.
 */
export function matchesMediaQuery(query: string, width: number, height: number): boolean {
  // A comma separated query matches when any of its branches matches
  return query.split(',').some((branch: string) =>
    branch.split(' and ').every((condition: string) => {
      const min: RegExpMatchArray | null = condition.match(/min-width:\s*([\d.]+)px/);
      if (min) return width >= parseFloat(min[1]);

      const max: RegExpMatchArray | null = condition.match(/max-width:\s*([\d.]+)px/);
      if (max) return width <= parseFloat(max[1]);

      if (/orientation:\s*portrait/.test(condition)) return height >= width;
      if (/orientation:\s*landscape/.test(condition)) return width > height;

      return false;
    }),
  );
}
