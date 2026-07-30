import { Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { PLATFORM_ID, REQUEST } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  SSR_DESKTOP_VIEWPORT,
  SSR_MOBILE_VIEWPORT,
  ScaffoldMediaMatcher,
  matchesMediaQuery,
} from './media-matcher.service';

const MOBILE = SSR_MOBILE_VIEWPORT;
const DESKTOP = SSR_DESKTOP_VIEWPORT;

const match = (query: string, vp: { width: number; height: number }): boolean =>
  matchesMediaQuery(query, vp.width, vp.height);

// A stub rather than a real Request: browsers strip Sec-* headers from script built requests
const requestWith = (headers: Record<string, string>): Request =>
  ({
    headers: { get: (name: string) => headers[name.toLowerCase()] ?? null },
  }) as unknown as Request;

const serverMatcher = (headers: Record<string, string>): MediaMatcher => {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({
    providers: [
      ScaffoldMediaMatcher,
      { provide: PLATFORM_ID, useValue: 'server' },
      { provide: REQUEST, useValue: requestWith(headers) },
    ],
  });
  return TestBed.inject(ScaffoldMediaMatcher);
};

describe('matchesMediaQuery', () => {
  // CDK exposes no numeric breakpoints, so the assumed device sizes are pinned here instead
  it('assumes viewports that land in the intended CDK breakpoints', () => {
    expect(match(Breakpoints.XSmall, SSR_MOBILE_VIEWPORT)).toBe(true);
    expect(match(Breakpoints.Large, SSR_DESKTOP_VIEWPORT)).toBe(true);
  });

  it('places the assumed mobile viewport in XSmall only', () => {
    expect(match(Breakpoints.XSmall, MOBILE)).toBe(true);
    expect(match(Breakpoints.Small, MOBILE)).toBe(false);
    expect(match(Breakpoints.Medium, MOBILE)).toBe(false);
    expect(match(Breakpoints.Large, MOBILE)).toBe(false);
  });

  it('places the assumed desktop viewport in Large only', () => {
    expect(match(Breakpoints.XSmall, DESKTOP)).toBe(false);
    expect(match(Breakpoints.Small, DESKTOP)).toBe(false);
    expect(match(Breakpoints.Medium, DESKTOP)).toBe(false);
    expect(match(Breakpoints.Large, DESKTOP)).toBe(true);
  });

  it('respects the fractional upper bounds', () => {
    expect(matchesMediaQuery(Breakpoints.XSmall, 599, 800)).toBe(true);
    expect(matchesMediaQuery(Breakpoints.XSmall, 600, 800)).toBe(false);
    expect(matchesMediaQuery(Breakpoints.Small, 600, 800)).toBe(true);
    expect(matchesMediaQuery(Breakpoints.Small, 960, 800)).toBe(false);
  });

  it('treats width bounds as inclusive', () => {
    expect(matchesMediaQuery('(max-width: 390px)', 390, 844)).toBe(true);
    expect(matchesMediaQuery('(max-width: 389px)', 390, 844)).toBe(false);
    expect(matchesMediaQuery('(min-width: 390px)', 390, 844)).toBe(true);
    expect(matchesMediaQuery('(min-width: 391px)', 390, 844)).toBe(false);
  });

  it('matches any branch of a comma separated query', () => {
    expect(match(Breakpoints.Handset, MOBILE)).toBe(true);
    expect(matchesMediaQuery(Breakpoints.Handset, 900, 400)).toBe(true);
    expect(match(Breakpoints.Handset, DESKTOP)).toBe(false);
  });

  it('derives orientation from the assumed viewport', () => {
    expect(matchesMediaQuery('(orientation: portrait)', 390, 844)).toBe(true);
    expect(matchesMediaQuery('(orientation: landscape)', 390, 844)).toBe(false);
    expect(matchesMediaQuery('(orientation: landscape)', 1280, 800)).toBe(true);
  });

  it('never matches a condition the request cannot answer', () => {
    expect(matchesMediaQuery('(prefers-color-scheme: dark)', 390, 844)).toBe(false);
    expect(matchesMediaQuery('(min-width: 300px) and (hover: hover)', 390, 844)).toBe(false);
  });
});

describe('ScaffoldMediaMatcher on the server', () => {
  it('assumes mobile when Sec-CH-UA-Mobile is set', () => {
    const matcher = serverMatcher({ 'sec-ch-ua-mobile': '?1' });
    expect(matcher.matchMedia(Breakpoints.XSmall).matches).toBe(true);
    expect(matcher.matchMedia(Breakpoints.Large).matches).toBe(false);
  });

  it('assumes desktop when Sec-CH-UA-Mobile is not set', () => {
    const matcher = serverMatcher({ 'sec-ch-ua-mobile': '?0' });
    expect(matcher.matchMedia(Breakpoints.XSmall).matches).toBe(false);
    expect(matcher.matchMedia(Breakpoints.Large).matches).toBe(true);
  });

  it('falls back to the User-Agent when the hint is absent', () => {
    const ios = serverMatcher({ 'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0)' });
    expect(ios.matchMedia(Breakpoints.XSmall).matches).toBe(true);

    const firefox = serverMatcher({
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; rv:121.0) Firefox',
    });
    expect(firefox.matchMedia(Breakpoints.Large).matches).toBe(true);
  });

  it('prefers the hint over the User-Agent', () => {
    const matcher = serverMatcher({
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0)',
    });
    expect(matcher.matchMedia(Breakpoints.Large).matches).toBe(true);
  });

  it('assumes desktop without a request', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [ScaffoldMediaMatcher, { provide: PLATFORM_ID, useValue: 'server' }],
    });
    const matcher = TestBed.inject(ScaffoldMediaMatcher);
    expect(matcher.matchMedia(Breakpoints.Large).matches).toBe(true);
  });

  it('returns an inert MediaQueryList', () => {
    const list = serverMatcher({}).matchMedia(Breakpoints.Large);
    expect(list.media).toBe(Breakpoints.Large);
    expect(() => list.addEventListener('change', () => {})).not.toThrow();
    expect(() => list.removeEventListener('change', () => {})).not.toThrow();
  });
});
