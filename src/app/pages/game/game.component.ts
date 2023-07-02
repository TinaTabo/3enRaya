import { Component } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';
import { PlayerService } from 'src/app/shared/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  public players: Jugador[];

  constructor(public playerService: PlayerService, public router: Router){
    this.players = this.playerService.players;
  }

  goToHome(){
    this.playerService.players = [];
    this.router.navigateByUrl("/");
  }
}
