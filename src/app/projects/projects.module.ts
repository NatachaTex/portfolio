import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SustainableForumComponent} from './sustainable-forum/sustainable-forum.component';
import {SharedModule} from '../shared/shared.module';
import { ParallelRealitiesComponent } from './parallel-realities/parallel-realities.component';
import { BellevilleShowroomComponent } from './belleville-showroom/belleville-showroom.component';
import { DulalaComponent } from './dulala/dulala.component';
import { LaFontaineComponent } from './la-fontaine/la-fontaine.component';
import { BuyingAddictionComponent } from './buying-addiction/buying-addiction.component';

const routes: Routes = [
  {
    path: 'cite-developpement-durable',
    component: SustainableForumComponent
  },
  {
    path: 'realite-parallele',
    component: ParallelRealitiesComponent
  },
  {
    path: 'jpo-ateliers-belleville',
    component: BellevilleShowroomComponent
  },
  {
    path: 'dulala',
    component: DulalaComponent
  },
  {
    path: 'la-fontaine',
    component: LaFontaineComponent
  },
  {
    path: 'addiction-achats',
    component: BuyingAddictionComponent
  }
];

@NgModule({
  declarations: [
    SustainableForumComponent,
    ParallelRealitiesComponent,
    BellevilleShowroomComponent,
    DulalaComponent,
    LaFontaineComponent,
    BuyingAddictionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ProjectsModule { }
