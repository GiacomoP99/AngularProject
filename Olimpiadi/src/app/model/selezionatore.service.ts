import { Injectable } from '@angular/core';
import { OlimpioniciService } from './olimpionici-service';

@Injectable()
export class SelezionatoreService {
  constructor(private selezionati: OlimpioniciService) {}
  name: string = '';
  surname: string = '';
  city: string = '';
  address: string = '';

  clear() {
    this.name = '';
    this.surname = '';
    this.city = '';
    this.address = '';
    this.selezionati.clear();
  }
}
