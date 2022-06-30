import { Component, OnInit } from '@angular/core';
import { Atleta } from 'src/app/model/atleta';
import { AtletaRepositoryService } from 'src/app/model/atleta-repository.service';
import { AtletiSelezionatiService } from 'src/app/model/atleti-selezionati.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private atletiRepository: AtletaRepositoryService, private atletiSelezionati: AtletiSelezionatiService) { }

  getAtleti(): Atleta[] {
    return this.atletiRepository.getAtleti();
  }

  getSports(): string[] {
    return this.atletiRepository.getSports();
  }

  getNazioni(): string[] {
    return this.atletiRepository.getNazioni();
  }

  aggiungi(atleta: Atleta) {
    this.atletiSelezionati.aggiungi(atleta);
  }

  elimina(atleta: Atleta) {
    this.atletiSelezionati.elimina(atleta);
  }

  selezionato(atleta: Atleta): boolean {
    return this.atletiSelezionati.selezionato(atleta);
  }



  ngOnInit(): void {
  }

}
