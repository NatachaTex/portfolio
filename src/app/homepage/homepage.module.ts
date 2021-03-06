import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxMasonryModule} from 'ngx-masonry';
import {SharedModule} from '../shared/shared.module';


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
    NgxMasonryModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class HomepageModule { }
