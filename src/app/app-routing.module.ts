import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/start', pathMatch: 'full'
  },
  {
    path: 'start', loadChildren: () => import('./pages/startpage/startpage.module').then(m => m.StartpageModule)
  },
  {
    path: 'documentation', loadChildren: () => import('./pages/documentation/documentation.module').then(m => m.DocumentationModule)
  },
  {
    path: 'typography', loadChildren: () => import('./pages/typography/typography.module').then(m => m.TypographyModule)
  },
  {
    path: '**', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
