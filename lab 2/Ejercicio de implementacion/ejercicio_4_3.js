
function enrutar(req, response, dir, page){
	var url = req.url;
    console.log(url);
    if(url == dir){
		var fs=require('fs');
		fs.readFile(''+page, function(err, html){
			response.write(html);
		});
	}
}

module.exports.enrutar = enrutar;