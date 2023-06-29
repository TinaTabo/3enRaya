export class Jugador {

    public id_jugador: string;
    public name: string;
    public personaje: string;
    public victorias: number;
    public color: string;

    constructor(id_jugador: string, name: string, personaje: string, victorias: number, color: string){
        this.id_jugador = id_jugador;
        this.name = name; //nombre
        this.personaje = personaje; //url de la imagen
        this.victorias = victorias;
        this.color = color;
    }
}
