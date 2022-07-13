import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Articolo } from "src/app/model/articolo";

@Component({
  selector: "articolo",
  templateUrl: "articolo.component.html",
  styleUrls: ["articolo.component.css"],
})
export class ArticoloComponent {
  @Input() articolo: Articolo;
  @Output() like = new EventEmitter<number>();
  constructor() {}

  incrementaApprezzamenti() {
    this.articolo.numApprezzamenti = this.articolo.numApprezzamenti + 1;
    this.like.emit(this.articolo.numApprezzamenti);
  }
}
