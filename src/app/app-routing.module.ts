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
    path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '**', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
