var http = require('http'),
operaciones=require('./operaciones.js'),
suma=operaciones.suma,
parser=require('../parser_var.js'),
p=parser.parse_vars,
fs=require('fs');

http.createServer(function(req, res){
	fs.readFile('./index.html', function(err, html){
		var html_string=html.toString();
		var n1,n2,resp,oper;
		console.log('Calculadora:');
		var respuesta=p(req),
		parametros=respuesta['parametros'],
		valores=respuesta['valores'];

		for(var i=0; i<parametros.length; i++){
			html_string=html_string.replace('{'+parametros[i]+'}', valores[i]);
			if(parametros[i].toString()=="num1"){
				n1=valores[i].toString();
			}
			if(parametros[i].toString()=="num2"){
				n2=valores[i].toString();
			}
			if(parametros[i].toString()=="op"){
				oper=valores[i].toString();
			}
			
		}

			if(valores[i].toString()=="suma"){
				 resp = suma(n1,n2);
				console.log(resp);
				html_string=html_string.replace('{respuesta}', resp);
				}
		res.writeHead(200, {'Content-type':'text'});
		res.write(html_string);
	});
}).listen(8080);