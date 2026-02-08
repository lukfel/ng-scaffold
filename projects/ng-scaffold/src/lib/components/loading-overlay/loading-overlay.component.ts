import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { LoadingOverlayConfig, ScaffoldLibraryConfig } from '../../models';
import { CONFIG } from '../../scaffold.config';
import { ScaffoldService } from '../../services';

@Component({
    selector: 'lf-loading-overlay',
    templateUrl: './loading-overlay.component.html',
    styleUrls: ['./loading-overlay.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        PortalModule,
        MatProgressSpinner
    ]
})
export class LoadingOverlayComponent implements OnInit {

    public libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });

    private scaffoldService = inject(ScaffoldService);


    public loadingOverlayConfig = signal<LoadingOverlayConfig | null>(null);
    public portal = signal<ComponentPortal<any> | null>(null);


    ngOnInit(): void {
        this.loadingOverlayConfig.set(this.scaffoldService.scaffoldConfig?.loadingOverlayConfig || null);

        const customComponent = this.loadingOverlayConfig()?.customComponent || null;
        if (customComponent) {
            this.portal.set(new ComponentPortal(customComponent));
        }
    }
}
