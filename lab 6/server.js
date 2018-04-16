var express= require('express'),
app= express(),
http= require('http').Server(app),
port= process.env.PORT || 3000;

app.set('view engine'.'jade');

app.use('/static', express.static('public'));

app.get('/', function(req,res){
	res.render('main');
});

http.listen(port,function(){
	console.log('Servidior conectado en: '+ port);
});