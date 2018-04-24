var http=require('http'), 
fs=require('fs');

var express = require('express'),
app = express(),
bodyParser = require('body-parser');

app.get('/',function(request, response){
	fs.readFile('./index.html', function(err, html){
		response.write(html);
		response.end();
	});
});

app.get('/contactenos.html',function(request, response){
	fs.readFile('./contactenos.html', function(err, html){
		response.write(html);
		response.end();
	});
});
app.get('/nosotros.html',function(request, response){
	fs.readFile('./nosotros.html', function(err, html){
		response.write(html);
		response.end();
	});
});

app.get('/nuestros_servicios.html',function(request, response){
	fs.readFile('./nuestros_servicios.html', function(err, html){
		response.write(html);
		response.end();
	});
});

app.get('/catalogo_de_clientes.html',function(request, response){
	fs.readFile('./catalogo_de_clientes.html', function(err, html){
		response.write(html);
		response.end();
	});
});



app.listen(8080, function(){
	console.log('Iniciando en puerto 8080');
});