import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/models/jugador';
import { PlayerService } from 'src/app/shared/player.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  constructor (public router: Router, public playerService: PlayerService){

  }

  public irJuego(name1: string, avatar1: string, name2: string, avatar2: string):void{

    //creacion de perfil de jugador1
    let personaje1 = avatar1;
    let nombre1;
    if (name1 == ''){
      switch (personaje1) {
        case 'assets/img/ficha_mario.png':
          nombre1 = "mario";
          break;
        case 'assets/img/ficha_toad.png':
          nombre1 = "toad";
          break;
        case 'assets/img/ficha_peach.png':
          nombre1 = "peach";
          break;
        case 'assets/img/ficha_daisy.png':
          nombre1 = "daisy";
          break;
        case 'assets/img/ficha_wario.png':
          nombre1 = "wario";
          break;
        default:
          nombre1 = "jugador 1";
      }
    }
    else{
      nombre1 = name1;
    }
    
    let color1 = '';
    //segun que personaje elijamos aplicamos el color del nombre
    switch (personaje1) {
      case 'assets/img/ficha_mario.png':
      case 'assets/img/ficha_toad.png':
        color1 = "red";
        break;
      case 'assets/img/ficha_peach.png':
        color1 = "pink";
        break;
      case 'assets/img/ficha_daisy.png':
        color1 = "gold";
        break;
      case 'assets/img/ficha_wario.png':
        color1 = "MediumOrchid";
        break;
      default:
        color1 = "black";
    }
    let player1 = new Jugador("assets/img/player1.png",nombre1,avatar1,0, color1);
    this.playerService.players.push(player1);

    //creacion de perfil de jugador1
    let personaje2 = avatar2;
    let nombre2;
    if (name2 == ''){
      switch (personaje2) {
        case 'assets/img/ficha_luigi.png':
          nombre2 = "luigi";
          break;
        case 'assets/img/ficha_yoshi.png':
          nombre2 = "yoshi";
          break;
        case 'assets/img/ficha_bowser.png':
          nombre2 = "bowser";
          break;
        case 'assets/img/ficha_rosalina.png':
          nombre2 = "rosalina";
          break;
        case 'assets/img/ficha_waluigi.png':
          nombre2 = "waluigi";
          break;
        default:
          nombre2 = "jugador 2";
      }
    }
    else{
      nombre2 = name2;
    }

    let color2 = '';
    //segun que personaje elijamos aplicamos el color del nombre
    switch (personaje2) {
      case 'assets/img/ficha_luigi.png':
      case 'assets/img/ficha_yoshi.png':
        color2 = "green";
        break;
      case 'assets/img/ficha_bowser.png':
        color2 = "brown";
        break;
      case 'assets/img/ficha_rosalina.png':
        color2 = "Turquoise";
        break;
      case 'assets/img/ficha_waluigi.png':
        color2 = "indigo";
        break;
      default:
        color2 = "black";
    }
    let player2 = new Jugador("assets/img/player2.png",nombre2,avatar2,0, color2);
    this.playerService.players.push(player2);

    this.router.navigateByUrl('/game');
  }
}
