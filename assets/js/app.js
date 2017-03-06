var botones = document.getElementsByClassName('tic');
var identificador = {};
var jugador = true;
for (var i = 0, l = botones.length; i < l; i++) {
	botones[i].onclick = function () {
		identificador = document.getElementById(this.id);
		if (jugador){
			identificador.value = "X";
			identificador.style = "background-color: blue; color: white; width:70px; height:70px" ;
			jugador = false;
		}else{
			identificador.value = "O";
			identificador.style = "background-color: red; color: white; width:70px; height:70px" ;
			jugador = true;
		}

	};
}






/*function jugar(jugador){
	if (jugador == 1){

	}
}
var jugador1 = {
	botonColor = blue;
	simbolo = x;
}
var jugador2 = {
	botonColor = red;
	simbolo = o;
}*/
