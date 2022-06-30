import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDatasourceService } from './static-datasource.service';
import { AtletaRepositoryService } from './atleta-repository.service';
import { AtletiSelezionatiService } from './atleti-selezionati.service';



@NgModule({
  declarations: [],
  providers: [
    StaticDatasourceService,
    AtletaRepositoryService,
    AtletiSelezionatiService
  ],
  imports: [
    CommonModule
  ]
})
export class ModelModule { }
