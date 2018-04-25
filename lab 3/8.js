(function(){
	var mayor=function(o1, o2){
		if(o1.tamano>o2.tamano){
			console.log(o1.nombre+' es mayor');
		} else {
			console.log(o2.nombre+' es mayor');
		}
	};

	var numero=function(nombre, tamano){
		return{
			nombre: nombre,
			tamano: tamano
		};
	};

	var x = new numero("variable 1", 8);
	var y = new numero("variable 2", 10);

	//mayor(x, y);

}());

(function(){
	var album_favorito = function(coleccion){
		if(coleccion.length === 0){
			return;
		}
		var mas_reproducido=coleccion[0].tocado,
			mas_indice = 0;

		for(var i=0, len = coleccion.length; i<len; i++){
			if(coleccion[i].obtenerToque() > mas_reproducido){
				mas_reproducido=coleccion[i].obtenerToque();
				mas_indice=i;
			}
		}
		return {
			nombre: coleccion[mas_indice].nombre, play: mas_reproducido, index: mas_indice
		};
	};

	var album=function(nombre, tocado){
		return{
			nombre: nombre,
			tocado: 0,
			registrarToque: function(t){ tocado: tocado+t; },
			obtenerToque: function(){ return tocado; }
		};
	};

	var music = [
	    new album("album1", 2),
	    new album("album2", 6),
	    new album("album3", 5)
	];

	var fav = album_favorito(music);

	//console.log("Tu album favorito "+fav.nombre+" fue tocado "+fav.play+" veces");
}());

/*
(function(){
	var Sumar = function(){
		return{
			suma: 0,
			agregar: function(num){ suma: suma+num; },
			obtenerSumaActual: function(){ return suma; }
		};
	};

	var s1 = new Sumar();
	var s2 = new Sumar();

	s1.agregar(10);
	s1.agregar(20);

	s2.agregar(30);
	s2.agregar(5);


	console.log(s1.obtenerSumaActual());
	console.log(s2.obtenerSumaActual());
}());
*/

//8.6
function numeroPrimo(num) {
	if(num / 1){
		var boo = num != 1;
		for (var i = 2; i < num; i++) {
			if (num % i === 0) {
				boo = false;
				break;
			}
		}
		return boo;
	} else {
		return "Solo se aceptan numeros"
	}
}

console.log(numeroPrimo(7));