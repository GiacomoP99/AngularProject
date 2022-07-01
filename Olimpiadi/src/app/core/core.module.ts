import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { HomeComponent } from './home/home.component';
import { DettaglioSelezioneComponent } from './dettaglio-selezione/dettaglio-selezione.component';
import { DatiSelezionatoreComponent } from './dati-selezionatore/dati-selezionatore.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    DettaglioSelezioneComponent,
    DatiSelezionatoreComponent,
  ],
  imports: [CommonModule, ModelModule, FormsModule, RouterModule],
  exports: [HomeComponent],
})
export class CoreModule {}
