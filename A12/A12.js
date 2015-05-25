//core modules
var http = require('http');

//installed modules
var map = require('through2-map');

//my vars
var port = process.argv[2];

var server = http.createServer(function(request, response){
	if (request.method === 'POST') {
		request.pipe(map(function(data){
			data = data.toString().toUpperCase();
			return data;
		})).pipe(response);
	} else {
		console.log('not a POST request')
	}
});

server.listen(port);
