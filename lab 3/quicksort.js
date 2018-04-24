function quicksort(elementos){
	for(var j=0; j<elementos.length-1; j++){
		for(var i=1; i<elementos.length; i++){
			var va=elementos[i-1];
			var vb=elementos[i];
			if(va<=vb){
				elementos[i]=va;
				elementos[i-1]=vb
			}else{
				elementos[i-1]=va;
				elementos[i]=vb;
			}
		console.log(elementos);
		}
	}
}

var elemnts= [5,6,8,3,7,1,11];

quicksort(elemnts);