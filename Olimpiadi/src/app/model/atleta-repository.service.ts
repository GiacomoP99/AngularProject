import { Injectable } from '@angular/core';
import { Atleta } from './Atleta';
import { RepositoryService } from './repository.service';

@Injectable()
export class AtletaRepositoryService {

  constructor(private repo:RepositoryService) { }

  getAllAtleti(nazione:string, mostratutti:boolean):Atleta[]{
      if(nazione == "" && mostratutti){
        return this.repo.getAtleti();
      }else if(nazione == "" && !mostratutti){
        return this.repo.getAtleti().filter(atleta => !atleta.selezionato);
      }else if(mostratutti && nazione != ""){
        return this.repo.getAtleti().filter(atleta => atleta.nazione == nazione);
      }else{
        return this.repo.getAtleti().filter(atleta => !atleta.selezionato || atleta.nazione == nazione);
      }
      
    }

  getCategorie():string[]{
    return this.repo.getAtleti()
                .map(atleta => atleta.categoria)
                .filter((value,index,atleti) => atleti.indexOf(value) == index);
  }

  getNazioni():string[]{
    return this.repo.getAtleti()
                .map(atleta => atleta.nazione)
                .filter((value,index,atleti) => atleti.indexOf(value) == index);
  }

}
