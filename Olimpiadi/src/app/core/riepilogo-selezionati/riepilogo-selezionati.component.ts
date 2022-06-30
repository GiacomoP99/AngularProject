import { Component, OnInit } from '@angular/core';
import { AtletiSelezionatiService } from 'src/app/model/atleti-selezionati.service';

@Component({
  selector: 'ciccia',
  templateUrl: './riepilogo-selezionati.component.html',
  styleUrls: ['./riepilogo-selezionati.component.css']
})
export class RiepilogoSelezionatiComponent implements OnInit {

  constructor(private atletiSelezionati: AtletiSelezionatiService) { }

  get totale(): number {
    return this.atletiSelezionati.totale;
  }

  get totaleMaschi(): number {
    return this.atletiSelezionati.totaleMaschi;
  }

  get totaleFemmine(): number {
    return this.atletiSelezionati.totaleFemmine;
  }

  ngOnInit(): void {
  }

}
