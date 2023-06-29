import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/models/jugador';
import { PlayerService } from 'src/app/shared/player.service';

@Component({
  selector: 'app-form-settings',
  templateUrl: './form-settings.component.html',
  styleUrls: ['./form-settings.component.css']
})
export class FormSettingsComponent {

  public players: Jugador[];

  constructor (public router: Router, public playerService: PlayerService){
    this.players = this.playerService.getPlayers();
  }

  public cancelar():void {
    this.router.navigateByUrl('/');
  }

  // public aceptar(id_jugador: number, name: string, img: string, victorias: number):void{
  //   console.log("---------------> Estamos dentro de editar jugador <--------------");
  //   id_jugador = 1;
  //   name = "Prueba";
  //   img = "assets/img/ficha_yoshi.png"
  //   victorias = 3;
  //   let jugador = new Jugador(id_jugador, name, img, victorias);
  //   this.playerService.editPlayer(jugador);
  //   this.router.navigateByUrl('/');
  // }

}
