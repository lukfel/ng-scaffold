import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '', redirectTo: '/start', pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/startpage/startpage.routes').then(m => m.START_ROUTES)
  },
  {
    path: 'components',
    loadChildren: () => import('./pages/components/components.routes').then(m => m.COMPONENTS_ROUTES)
  },
  {
    path: 'documentation',
    loadChildren: () => import('./pages/documentation/documentation.routes').then(m => m.DOCUMENTATION_ROUTES)
  },
  {
    path: 'typography',
    loadChildren: () => import('./pages/typography/typography.routes').then(m => m.TYPOGRAPHY_ROUTES)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.routes').then(m => m.NOT_FOUND_ROUTES)
  }
];