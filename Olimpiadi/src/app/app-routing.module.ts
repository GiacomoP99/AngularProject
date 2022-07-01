import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatiSelezionatoreComponent } from './core/dati-selezionatore/dati-selezionatore.component';
import { DettaglioSelezioneComponent } from './core/dettaglio-selezione/dettaglio-selezione.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dati', component: DatiSelezionatoreComponent },
  { path: 'dettaglio', component: DettaglioSelezioneComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
