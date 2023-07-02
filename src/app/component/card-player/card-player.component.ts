import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent {

  @Input() player!: Jugador;
  @Input() color!: string;

  constructor() {}

}
