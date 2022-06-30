import { Injectable } from '@angular/core';
import { Atleta } from './atleta';

@Injectable(

)
export class StaticDatasourceService {

  constructor() { }

  private atleti: Atleta[] = [
    {
      id: 1, nome: "Federica", cognome: "Pellegrini", nazione: "Italia", sport: "nuoto", eta: 35, sesso: "F",
      descrizione: "orgoglio italiano"
    },
    {
      id: 2, nome: "Johnny", cognome: "Pippetti", nazione: "Italia", sport: "lancio del peso", eta: 55, sesso: "M",
      descrizione: "non orgoglio italiano"
    },
    {
      id: 3, nome: "Phill", cognome: "Spippas", nazione: "spagna", sport: "atletica", eta: 22, sesso: "M",
      descrizione: "orgoglio spagnolo"
    }
  ]

  getAtleti(): Atleta[] {
    return this.atleti;
  }

}
