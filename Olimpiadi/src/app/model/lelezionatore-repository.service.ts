import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { SelezionatoreService } from './selezionatore.service';

@Injectable()
export class LelezionatoreRepositoryService {
  constructor(private datasource: RepositoryService) {}

  saveOrder(selezionatore: SelezionatoreService) {
    this.datasource.saveOrder(selezionatore);
  }
}
