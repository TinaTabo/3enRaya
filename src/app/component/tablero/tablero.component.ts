import { Component } from '@angular/core';
import { PlayerService } from 'src/app/shared/player.service';
import { Jugador } from 'src/app/models/jugador';

/* Definir los estados que puede tener una casilla
   utilizando un enumerado */
enum Casilla {
  Vacio = '',
  Jugador1 = 'X',
  Jugador2 = 'O',
}

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent {
  //-- Array que representa el tablero. Es de tipo Casilla(enum que representa los estados
  //-- que puede tener una casilla del tablero), inicializado en el estado 'vacío'
  cuadricula: Casilla[] = new Array(9).fill(Casilla.Vacio);
  //-- Variable para indicar el jugador que está jugando actualmente. Se inicializa con el
  //-- jugador 1.
  jugadorActual: Casilla = Casilla.Jugador1;
  //-- Booleano que indica si el juego ha terminado.
  juegoTerminado = false;
  //-- Mensaje que se mostrará en el tablero para indicar que jugador ha ganado la partida.
  mensaje: string = '';
  //-- Tipo Enum Casilla para que lo reconozca el HTML.
  casillaEnum = Casilla;
  //-- Elemento de Sonido --> Cada vez que se cambia el estado de una casilla.
  sonidoMovimiento: HTMLAudioElement = new Audio();
  //-- Elemento de Sonido --> Cada vez que gana un jugador.
  sonidoWin: HTMLAudioElement = new Audio();
  //-- Elemento de Sonido --> Cada vez que hay un empate.
  sonidoLost: HTMLAudioElement = new Audio();

  //-- Constructor
  constructor(public playersService: PlayerService){
    //-- Añadir audio al HTMLAudioElement -> Ruta al archivo de sonido.
    this.sonidoMovimiento.src = '../../../assets/sound/mario_coin.wav';
    this.sonidoWin.src = '../../../assets/sound/win.wav';
    this.sonidoLost.src = '../../../assets/sound/lost.wav';
  }


  //-- Función que se ejecuta cada vez que un jugador hace click en una casilla.
  //-- Comprueba que el juego no ha terminado y que la casilla seleccionada está vacía. Si se cumplen
  //-- las condiciones, actualiza el estado de la casilla con el jugador actual y comprueba si hay ganador
  //-- o si el tablero está lleno, y dependiendo de la situación actualiza el mensaje que se le muestra
  //-- a los jugadores.
  hacerMovimiento(indice: number): void {
    if (!this.juegoTerminado && this.cuadricula[indice] === Casilla.Vacio) {
      this.cuadricula[indice] = this.jugadorActual;

      if (this.hayGanador()) {
        //-- Aqui jugadorActual debe cambiar de x y o al nombre del personaje.
        if (this.jugadorActual == Casilla.Jugador1) {
          this.mensaje = `¡${this.playersService.players[0].name} ha ganado!`;
          this.playersService.players[0].victorias += 1;
        }else{
          this.mensaje = `¡${this.playersService.players[1].name} ha ganado!`;
          this.playersService.players[1].victorias += 1;
        }
        this.sonidoWin.play(); //-- Reproducir el sonido.
        this.juegoTerminado = true;
      } else if (this.tableroLleno()) {
        this.mensaje = '¡Empate!';
        this.sonidoLost.play(); //-- Reproducir el sonido.
        this.juegoTerminado = true;
      } else {
        this.cambiarJugador();
      }
      this.sonidoMovimiento.play(); //-- Reproducir el sonido.
    }
  }

  //-- Funcionalidad del botón 'volver a jugar'
  //-- Resetea el juego al estado inicial (todas las casillas con valor 'vacio')
  reiniciarJuego(): void {
    this.cuadricula = new Array(9).fill(Casilla.Vacio);
    this.jugadorActual = Casilla.Jugador1;
    this.juegoTerminado = false;
    this.mensaje = '';
  }

  //-- Función para comprobar si hay alguna combinación ganadora en el tablero.
  private hayGanador(): boolean {
    const combinacionesGanadoras = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
      [0, 4, 8], [2, 4, 6] // diagonales
    ];

    for (const combinacion of combinacionesGanadoras) {
      const [a, b, c] = combinacion;
      if (
        this.cuadricula[a] !== Casilla.Vacio &&
        this.cuadricula[a] === this.cuadricula[b] &&
        this.cuadricula[a] === this.cuadricula[c]
      ) {
        return true;
      }
    }

    return false;
  }

  //-- Función para comprobar si todas las casillas tienen un valor distinto de 'vacio'(tablero lleno)
  private tableroLleno(): boolean {
    return !this.cuadricula.includes(Casilla.Vacio);
  }

  //-- Función para cambiar el jugador actual por el jugador1 o jugador2 segun corresponda.
  private cambiarJugador(): void {
    this.jugadorActual =
      this.jugadorActual === Casilla.Jugador1 ? Casilla.Jugador2 : Casilla.Jugador1;
  }
}