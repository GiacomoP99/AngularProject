import { Injectable } from '@angular/core';
import { Atleta } from './atleta';
import { StaticDatasourceService } from './static-datasource.service';

@Injectable()
export class AtletaRepositoryService {
  private atleti : Atleta[]=[];
  private sports : string[]=[];
  private nazioni : string[]=[];
  constructor(private datasource : StaticDatasourceService) {
    this.atleti=datasource.getAtleti();
    this.sports=datasource.getAtleti().map(a => a.sport).filter((w,i,a) => a.indexOf(w)===i);
    this.nazioni=datasource.getAtleti().map(a => a.nazione).filter((w,i,a) => a.indexOf(w)===i);
   }

   getAtleti(): Atleta[]{
    return this.atleti;
   }

   getSports() :string[]{
    return this.sports;
   }

   getNazioni() :string[]{
    return this.nazioni;
   }

}
