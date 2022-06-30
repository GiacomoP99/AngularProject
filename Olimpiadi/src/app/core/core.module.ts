import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModelModule } from '../model/model.module';
import { RiepilogoSelezionatiComponent } from './riepilogo-selezionati/riepilogo-selezionati.component';



@NgModule({
  declarations: [
    HomeComponent,
    RiepilogoSelezionatiComponent
  ],
  imports: [
    CommonModule,
    ModelModule
  ],
  exports :[
    HomeComponent
  ]
})
export class CoreModule { }
