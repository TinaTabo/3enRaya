import { Component } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';
import { PlayerService } from 'src/app/shared/player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  public players: Jugador[];

  constructor(public playerService: PlayerService){
    this.players = this.playerService.players;
  }

}
