import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LelezionatoreRepositoryService } from 'src/app/model/lelezionatore-repository.service';
import { SelezionatoreService } from 'src/app/model/selezionatore.service';

@Component({
  selector: 'app-dati-selezionatore',
  templateUrl: './dati-selezionatore.component.html',
  styleUrls: ['./dati-selezionatore.component.css'],
})
export class DatiSelezionatoreComponent implements OnInit {
  sent = false;
  constructor(
    public selezionatore: SelezionatoreService,
    public repo: LelezionatoreRepositoryService
  ) {}
  sendOrder(form: NgForm) {
    if (form.valid) {
      this.repo.saveOrder(this.selezionatore);
      this.selezionatore.clear();
      this.sent = true;
    }
  }
  ngOnInit(): void {}
}
