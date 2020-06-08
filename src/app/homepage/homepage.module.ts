import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

const menuItems = [
  { name: 'Tout', projectType: '' },
  { name: 'Edition', projectType: '' },
  { name: 'Identité visuelle', projectType: '' },
  { name: 'Print', projectType: '' },
  { name: 'Digital', projectType: '' },
];

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomepageModule { }
