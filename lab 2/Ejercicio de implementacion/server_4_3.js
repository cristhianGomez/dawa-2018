var http = require('http'),
ejercicio_4_3=require('./ejercicio_4_3.js'),
enrutar=ejercicio_4_3.enrutar,
fs=require('fs');

http.createServer(function(req, res){
	fs.readFile('./index.html', function(err, html){
		var html_string=html.toString();

		console.log('Enrutador:');
		enrutar(req, res, '/pruebaruta', './form2.html');

		res.writeHead(200, {'Content-type':'text'});
		res.write(html_string);
		res.end();
	});	
	}).listen(8080);