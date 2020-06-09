import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'a-propos',
    pathMatch: 'full',
    loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
