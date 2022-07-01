import { Injectable } from '@angular/core';
import { Atleta } from './Atleta';

@Injectable()
export class OlimpioniciService {
  private atletiSelezionati: Atleta[] = [];

  constructor() {}

  aggiungi(atleta: Atleta) {
    if (this.atletiSelezionati.indexOf(atleta) == -1) {
      this.atletiSelezionati.push(atleta);
    }
  }

  rimuovi(atleta: Atleta) {
    this.atletiSelezionati.splice(this.atletiSelezionati.indexOf(atleta), 1);
  }

  getQuantita(): number {
    return this.atletiSelezionati.length;
  }

  clear() {
    this.atletiSelezionati = [];
  }
}
