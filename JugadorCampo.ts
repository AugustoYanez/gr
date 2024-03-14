class JugadorCampo extends Jugador {

private porcGoles: number;
private cantAsistencias: number;
private tirosArco: number;


constructor(nombre: String, nacimiento: Date, posicion: Posicion, provincia: Provincia, equiposHistory: Equipo[], numCamiseta: number, porcGoles: number, cantAsistencias: number, tirosArco: number){
    super(nombre, nacimiento, posicion, provincia, equiposHistory, numCamiseta);
    this.porcGoles= porcGoles;
    this.cantAsistencias = cantAsistencias;
    this.tirosArco = tirosArco;
}

get getPorcGoles(): number {
    return this.porcGoles;
}
set setPorcGoles( value: number ) {
    this.porcGoles = value;
}

get getCantAsistencias(): number {
    return this.cantAsistencias;
}

set setCantAsistencias( value: number ) {
    this.cantAsistencias = value;
}

get getTirosArco(): number {
    return this.tirosArco;
}
set setTirosArco( value: number ) {
    this.tirosArco = value;
}
}