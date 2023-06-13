import { Component } from '@angular/core';

/* Definir los estados que puede tener una casilla
   utilizando un enumerado */
enum Jugador {
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
  //-- Array que representa el tablero. Es de tipo Jugador(enum que representa los estados
  //-- que puede tener una casilla del tablero), inicializado en el estado 'vacío'
  cuadricula: Jugador[] = new Array(9).fill(Jugador.Vacio);
  //-- Variable para indicar el jugador que está jugando actualmente. Se inicializa con el
  //-- jugador 1.
  jugadorActual: Jugador = Jugador.Jugador1;
  //-- Booleano que indica si el juego ha terminado.
  juegoTerminado = false;
  //-- Mensaje que se mostrará en el tablero para indicar que jugador ha ganado la partida.
  mensaje: string = '';
  //-- Tipo Enum Jugador para que lo reconozca el HTML.
  jugadorEnum = Jugador;
  //-- Elemento de Sonido --> Cada vez que se cambia el estado de una casilla.
  sonidoMovimiento: HTMLAudioElement = new Audio();

  //-- Constructor
  constructor(){
    //-- Añadir audio al HTMLAudioElement -> Ruta al archivo de sonido.
    this.sonidoMovimiento.src = '../../../assets/sound/mario_coin.wav';
  }


  //-- Función que se ejecuta cada vez que un jugador hace click en una casilla.
  //-- Comprueba que el juego no ha terminado y que la casilla seleccionada está vacía. Si se cumplen
  //-- las condiciones, actualiza el estado de la casilla con el jugador actual y comprueba si hay ganador
  //-- o si el tablero está lleno, y dependiendo de la situación actualiza el mensaje que se le muestra
  //-- a los jugadores.
  hacerMovimiento(indice: number): void {
    if (!this.juegoTerminado && this.cuadricula[indice] === Jugador.Vacio) {
      this.cuadricula[indice] = this.jugadorActual;

      if (this.hayGanador()) {
        //-- Aqui jugadorActual debe cambiar de x y o al nombre del personaje.
        this.mensaje = `¡Jugador ${this.jugadorActual} ha ganado!`;
        this.juegoTerminado = true;
      } else if (this.tableroLleno()) {
        this.mensaje = '¡Empate!';
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
    this.cuadricula = new Array(9).fill(Jugador.Vacio);
    this.jugadorActual = Jugador.Jugador1;
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
        this.cuadricula[a] !== Jugador.Vacio &&
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
    return !this.cuadricula.includes(Jugador.Vacio);
  }

  //-- Función para cambiar el jugador actual por el jugador1 o jugador2 segun corresponda.
  private cambiarJugador(): void {
    this.jugadorActual =
      this.jugadorActual === Jugador.Jugador1 ? Jugador.Jugador2 : Jugador.Jugador1;
  }
}
