var http= require('http'),
	fs= require('fs'),
	parser= require('./parser_var.js'),
	p= parser.parse_vars,
	moment= require('moment'),
	hoy = moment();


http.createServer(function(req,res){
	fs.readFile('./form3.html',function(err,html){
		var html_string=html.toString();

		var respuesta= p(req),
		parametros= respuesta['parametros'],
		valores= respuesta['valores'];
		
		for(var i=0; i< parametros.length; i++){
			if(parametros[i]=='fecha'){
				var html_string= html_string.replace('{'+ parametros[i]+'}', 	moment(valores[i]).fromNow());
		
				continue;
			}
			var html_string= html_string.replace('{'+ parametros[i]+'}', valores [i]);
		}


		res.writeHead(200,{'Content-type':'text/html'});
		res.write(html_string);
		
		res.end();

	});
}).listen(8080);