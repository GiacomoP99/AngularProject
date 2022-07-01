import { Injectable } from '@angular/core';
import { Atleta } from './Atleta';
import { SelezionatoreService } from './selezionatore.service';

@Injectable()
export class RepositoryService {
  constructor() {}

  private atleti: Atleta[] = [
    {
      nome: 'Federica Pellegrini',
      categoria: 'Nuoto',
      nazione: 'Italia',
      descrizione: 'bravissima nuotatrice',
      sesso: 'F',
      selezionato: false,
    },
    {
      nome: 'Usain Bolt',
      categoria: 'Corsa',
      nazione: 'Jamaica',
      descrizione: 'Usain Bolt ha battuto il record dei 100 e 200 metri',
      sesso: 'M',
      selezionato: false,
    },
    {
      nome: 'Iuri Chechi',
      categoria: 'Ginnastica',
      nazione: 'Italia',
      descrizione: 'Grande atleta',
      sesso: 'M',
      selezionato: false,
    },
    {
      nome: 'Carl Lewis',
      categoria: 'Atletica',
      nazione: 'USA',
      descrizione: 'Molto forte',
      sesso: 'M',
      selezionato: false,
    },
  ];

  getAtleti(): Atleta[] {
    return this.atleti;
  }

  saveOrder(selezionatore: SelezionatoreService) {
    console.log(JSON.stringify(selezionatore));
  }
}
