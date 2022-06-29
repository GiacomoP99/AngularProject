import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModelModule } from '../model/model.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ModelModule],
  exports: [HomeComponent],
})
export class CoreModule {}
