import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeComponent} from './about-me.component';
import {SharedModule} from '../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent
  }
];

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AboutMeModule { }
