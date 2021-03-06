import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModeratorService } from '../moderator.service';
import { Prodotto } from '../prodotto';

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {

  prodotto = new Prodotto();

  @Output() contaEvent = new EventEmitter<string>();
  @Output() cercaEvent = new EventEmitter<string>();
  @Output() aggEvent = new EventEmitter<Prodotto>();

  constructor(public mod: ModeratorService) { }

  ngOnInit(): void {
  }

  generaAggEvent() {
    this.aggEvent.emit(this.prodotto);
    this.prodotto = new Prodotto();

  }

  conta() {
    this.contaEvent.emit("conta passato");
  }
  ricerca() {
    this.cercaEvent.emit("cerca passato");
  }
}
