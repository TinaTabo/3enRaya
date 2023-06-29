import { Injectable } from '@angular/core';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public players: Jugador[];

  constructor() { 
    this.players = [];
  }

  public getPlayers(): Jugador[]{
    return this.players;
  }

  public editPlayer(jugador: Jugador): boolean{
    
    // let id_jugador = jugador.id_jugador;
    let id_jugador: number = 1;
    let editado: boolean = false;
    let i: number = id_jugador;

    console.log("---------> Estamos editando el jugador 1 <-----------------");
    
    //nombre del jugador
    // if (jugador.name != ''){this.players[i].name = jugador.name};
    this.players[i].name = jugador.name;
    console.log("********" + this.players[i].name);
    
    
    //imagen del personaje
    this.players[i].personaje = jugador.personaje;
    console.log("********" + this.players[i].personaje);
    // switch (jugador.personaje) {
    //   case 'mario':
    //     this.players[i].personaje = "assets/img/ficha_mario.png";
    //     break;
    //   case 'luigi':
    //     this.players[i].personaje = "assets/img/ficha_luigi.png";
    //     break;
    //   default:
    //     break;
    // }

    return editado;
  }

}
