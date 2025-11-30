import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { isDevMode, NgModule, provideZoneChangeDetection, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ScaffoldLoadingInterceptor, ScaffoldModule } from '@lukfel/ng-scaffold';
import { marked, MarkedOptions, Tokens } from 'marked';
import { MarkdownModule, MARKED_OPTIONS, SANITIZE } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

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

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        MarkdownModule.forRoot({
            loader: HttpClient,
            markedOptions: {
                provide: MARKED_OPTIONS,
                useFactory: markedOptionsFactory,
            },
            sanitize: {
                provide: SANITIZE,
                useValue: SecurityContext.NONE
            },
        }),
        ScaffoldModule.forRoot({ production: !isDevMode(), debugging: isDevMode(), outlineIcons: true }),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: false,
            registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: [
        provideZoneChangeDetection(),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ScaffoldLoadingInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
