import { Component, OnInit } from '@angular/core';
import { Atleta } from 'src/app/model/Atleta';
import { AtletaRepositoryService } from 'src/app/model/atleta-repository.service';
import { OlimpioniciService } from 'src/app/model/olimpionici-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private atletaService: AtletaRepositoryService, private olimpioniciService:OlimpioniciService) { }

  nazioneSelezionata:string = "";
  mostraTutti:boolean = false;

  getAtleti(): Atleta[]{
    return this.atletaService.getAllAtleti(this.nazioneSelezionata,!this.mostraTutti);
  }

  getCategorie(): string[]{
    return this.atletaService.getCategorie();
  }

  getNazioni(): string[]{
    return this.atletaService.getNazioni();
  }

  seleziona(atleta:Atleta){
    atleta.selezionato = true;
    this.olimpioniciService.aggiungi(atleta);
  }

  deseleziona(atleta:Atleta){
    atleta.selezionato = false;
    this.olimpioniciService.rimuovi(atleta);
  }

  get quantitaSelezionati(){
    return this.olimpioniciService.getQuantita();
  }

  setMostraTutti(checkMostraTutti: HTMLInputElement){
    if(checkMostraTutti.checked){
      this.mostraTutti = false;
    }else{
      this.mostraTutti = true;
    }
  }


  getFoto(nome:string):string{
    switch(nome){
      case "Federica Pellegrini":
        return "Pellegrini.png";
      case "Usain Bolt":
        return "Bolt.jpg";
      case "Iuri Chechi":
        return "Chechi.webp";
      case "Carl Lewis":
        return "Lewis.jpg";
      default:
        return "";
    }
  }

  ngOnInit(): void {
  }

}
