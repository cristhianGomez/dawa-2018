function sumar(num1, num2){
	return num1*num2;
}

function diasFaltantes(fecha){
	var fechat = fecha.toString();
	var fecha1 = new Date().getTime();
	var fecha2 = new Date(fechat.toString()).getTime();

	var diff = fecha2 - fecha1;
	var or=Math.ceil(diff/(1000 * 60 * 60 * 24));

	return or;
}

function enrutar(req, res, direccion, pagina){
	var url = req.url;
    console.log(url);
    if(url == direccion){
		var fs=require('fs');
		fs.readFile(''+pagina, function(error, html){
			res.write(html);
		});
	}
}

module.exports.sumar = sumar;