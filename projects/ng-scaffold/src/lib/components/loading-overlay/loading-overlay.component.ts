import { ComponentPortal } from '@angular/cdk/portal';
import { Component, inject, OnInit } from '@angular/core';
import { CONFIG } from '../../config/config.token';
import { LoadingOverlayConfig, ScaffoldLibraryConfig } from '../../models';
import { ScaffoldService } from '../../services';

@Component({
    selector: 'lf-loading-overlay',
    templateUrl: './loading-overlay.component.html',
    styleUrls: ['./loading-overlay.component.scss'],
    standalone: false
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
