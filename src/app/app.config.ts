import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, isDevMode, provideZonelessChangeDetection, SecurityContext } from '@angular/core';
import { MAT_ICON_DEFAULT_OPTIONS } from '@angular/material/icon';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { provideScaffold, ScaffoldLoadingInterceptor } from '@lukfel/ng-scaffold';
import { marked, MarkedOptions, Tokens } from 'marked';
import { MARKED_OPTIONS, provideMarkdown, SANITIZE } from 'ngx-markdown';
import { APP_ROUTES } from './app.routes';

export function markedOptionsFactory(): MarkedOptions {
    const renderer = new marked.Renderer();
    renderer.heading = ({ tokens, depth }: Tokens.Heading): string => {
        const text = tokens.map(t => t.raw).join('').trim();
        const slug = text
            .toLowerCase()
            .replace(/[^\w]+/g, '-')
            .replace(/(^-|-$)/g, '');
        return `<h${depth} id="${slug}">${text}</h${depth}>`;
    };
    return { renderer };
}

export const APP_CONFIG: ApplicationConfig = {
    providers: [
        provideRouter(APP_ROUTES, withHashLocation()),
        provideZonelessChangeDetection(),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
        provideServiceWorker('ngsw-worker.js', { enabled: !isDevMode(), registrationStrategy: 'registerWhenStable:30000' }),
        provideScaffold({ production: !isDevMode(), debugging: isDevMode() }),
        { provide: HTTP_INTERCEPTORS, useClass: ScaffoldLoadingInterceptor, multi: true },
        provideMarkdown({ loader: HttpClient, markedOptions: { provide: MARKED_OPTIONS, useFactory: markedOptionsFactory, }, sanitize: { provide: SANITIZE, useValue: SecurityContext.NONE }, }),
        { provide: MAT_ICON_DEFAULT_OPTIONS, useValue: { fontSet: 'material-icons-outlined' } }
    ]
}