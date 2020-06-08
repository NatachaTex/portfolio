import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxMasonryModule} from 'ngx-masonry';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxMasonryModule
  ]
})
export class HomepageModule { }
