class Jugador {

private nombre: String;
private nacimiento: Date;
private posicion: Posicion;
private provincia: Provincia;
private equiposHistory: Equipo[];   
private NumCamiseta: number;

constructor(nombre: String, nacimiento: Date, posicion: Posicion, provincia: Provincia, equiposHistory: Equipo[], numCamiseta: number ){
    this.nombre = nombre;
    this.nacimiento = nacimiento;
    this.posicion = posicion;
    this.provincia = provincia;
    this.equiposHistory = equiposHistory;
    this.NumCamiseta = numCamiseta;
}

get getNombre(): String {
    return this.nombre;
}
set setNombre(value: String){
    this.nombre = value;
}
get getNacimiento(): Date {
    return this.nacimiento;
}
set setNacimiento(value: Date){
    this.nacimiento = value;
}

get getPosicion(): Posicion {
    return this.posicion;
}
set setPosicion(value: Posicion){
    this.posicion = value;
}

get getProvincia(): Provincia {
    return this.provincia;
}
set setProvincia(value: Provincia){
    this.provincia = value;
}

get getEquiposHistory(): Equipo[] {
    return this.equiposHistory;
}
set setEquiposHistory(value: Equipo[]){
    this.equiposHistory = value;
}

get getNumCamiseta(): number {
    return this.NumCamiseta;
}
set setNumCamiseta(value: number){
    this.NumCamiseta = value;
}


}