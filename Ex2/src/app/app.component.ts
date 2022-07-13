import { Component } from "@angular/core";
import { Articolo } from "./model/articolo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app works!";
  myArticolo: Articolo;
  constructor() {
    this.myArticolo = {
      titolo: "Creare componenti Angular",
      autore: "Massio Roy",
      testo: "Creare componenti con Angular  è molto semplice.",
      numApprezzamenti: 0,
    };
  }

  mostraMessaggio(numApp: number) {
    alert("grazie per il like, like totali:" + numApp);
  }
}
