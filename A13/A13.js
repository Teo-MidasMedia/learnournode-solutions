//core modules
var http = require('http');
var url = require('url');

//my vars
var port = process.argv[2];

var server = http.createServer(function(request, response){
	
	var theUrl = url.parse(request.url, true);
	var theTime = theUrl.query.iso;
	var path = theUrl['pathname'].split('/');
	var result = '';

	response.writeHead(200, { 'Content-Type': 'application/json' });
	
	if(path === 'parsetime'){
		var result = {
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        }
		response.write(JSON.stringify(result));
	} else if(path === 'unixtime') {
		var result = {
			unixtime : theTime.getTime()
		}
		response.write(JSON.stringify(result));  
	}
});

server.listen(port);
