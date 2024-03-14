class Arquero extends Jugador {

private porcAtajadas: number;
private cantGolesRecibidos: number;

constructor(nombre: String, nacimiento: Date, posicion: Posicion, provincia: Provincia, equiposHistory: Equipo[], numCamiseta: number,porcAtajadas: number, cantGolesRecibidos: number ){
    super(nombre, nacimiento, posicion, provincia, equiposHistory, numCamiseta,)
    this.porcAtajadas = porcAtajadas;
    this.cantGolesRecibidos = cantGolesRecibidos;
}

get getPorcAtajadas(){
    return this.porcAtajadas;
}
set setPorcAtajadas(value: number){
    this.porcAtajadas = value;
}

get getCantGolesRecibidos(){
    return this.cantGolesRecibidos;
}

set setCantgolesRecibidos(value: number){
 this.cantGolesRecibidos = value;
}




}