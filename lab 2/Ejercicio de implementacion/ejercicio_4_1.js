var http= require('http'),
	fs= require('fs'),
	moment= require('moment'),
	hoy = moment();

var parametros=[], valores=[], arreglo_parametros=[];

http.createServer(function(req,res){
	fs.readFile('./form1.html',function(err,html){

		var html_string=html.toString();
			html_string= html_string.replace('{fecha}', hoy.format('MMMM Do YYYYY, h:mm:ss a'));
			html_string= html_string.replace('{fecha1}', hoy.format('dddd'));
			html_string= html_string.replace('{fecha2}', hoy.format('MMMM Do YYYYY'));
			html_string= html_string.replace('{fecha3}', hoy.format('YYYY [holis] YYYY'));
			html_string= html_string.replace('{fecha4}', hoy.format());
		res.writeHead(200,{'Content-type':'text/html'});
		res.write(html_string);
		
		res.end();

	});
}).listen(8080);