class Equipo implements Contrato  {

private nombreClub:String;
private jugadores: Jugador[];  

constructor(nombreClub:String, jugadores:Jugador[]) {
    this.nombreClub = nombreClub;
    this.jugadores = jugadores;
}

get getNombreClub():String {
    return this.nombreClub;
}

set setNombreClub(nombreClub:String) {  
    this.nombreClub = nombreClub;
}

get getjugadores():Jugador[] {
    return this.jugadores;
}
set setjugadores(jugadores:Jugador[]){
    this.jugadores = jugadores;
}


}