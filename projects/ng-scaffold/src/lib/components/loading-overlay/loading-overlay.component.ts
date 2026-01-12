import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { LoadingOverlayConfig, ScaffoldLibraryConfig } from '../../models';
import { CONFIG } from '../../scaffold.config';
import { ScaffoldService } from '../../services';

@Component({
    selector: 'lf-loading-overlay',
    templateUrl: './loading-overlay.component.html',
    styleUrls: ['./loading-overlay.component.scss'],
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


    public portal: ComponentPortal<any> | null = null;
    public loadingOverlayConfig: LoadingOverlayConfig | null = null;


    ngOnInit(): void {
        this.loadingOverlayConfig = this.scaffoldService.scaffoldConfig?.loadingOverlayConfig || null;

        if (this.loadingOverlayConfig?.customComponent) {
            this.portal = new ComponentPortal(this.loadingOverlayConfig?.customComponent);
        }
    }
}
