import { Injectable } from '@angular/core';
import { Atleta } from './atleta';
import { AtletaSelezionato } from './atleta-selezionato';

@Injectable()
export class AtletiSelezionatiService {

  private atletiSelezionati: AtletaSelezionato[] = [];

  constructor() { }

  aggiungi(atleta: Atleta) {
    let persona = this.atletiSelezionati.find(atletaSelezionato => atletaSelezionato.id == atleta.id);

    if (persona == undefined) {
      persona = new AtletaSelezionato(atleta.id, atleta.nome, atleta.cognome, atleta.nazione, atleta.sport, atleta.sesso, true);
      this.atletiSelezionati.push(persona);
    }

  }

  elimina(atleta: Atleta) {
    let persona = this.atletiSelezionati.find(atletaSelezionato => atletaSelezionato.id == atleta.id);
    if (persona != undefined) {
      this.atletiSelezionati.splice(this.atletiSelezionati.indexOf(persona), 1);
    }

  }

  get totale(): number {
    return this.atletiSelezionati.length;
  }

  get totaleMaschi(): number {
    return this.atletiSelezionati.filter(atleta => atleta.sesso == 'M').length;
  }

  get totaleFemmine(): number {
    return this.atletiSelezionati.filter(atleta => atleta.sesso == 'F').length;
  }

  selezionato(atleta: Atleta): boolean {
    return this.atletiSelezionati.find(sel => sel.id == atleta.id) != undefined;
  }

}
