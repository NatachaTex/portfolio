import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import { LayoutModule } from '@angular/cdk/layout';




@NgModule({
  declarations: [FooterComponent],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
  ]
})
export class SharedModule { }
