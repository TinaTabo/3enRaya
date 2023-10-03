import { Injectable } from '@angular/core';
import { Jugador } from '../models/jugador';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public players: Jugador[];

  constructor(public router: Router) {
    this.players = [];
  }

  public inicializarJugadores (player1: Jugador, player2: Jugador): void{

    this.players.push(player1);
    this.players.push(player2);

    this.router.navigateByUrl('/game');
  }

}
