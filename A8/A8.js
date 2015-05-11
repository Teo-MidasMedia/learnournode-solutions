//core modules
var http = require('http');

//installed modules
var concatStream = require('concat-stream');

//my vars
var url = process.argv[2];

http.get(url, function(response){
	response.pipe(concatStream(function(data){
		console.log(data.length);
		data = data.toString();
		console.log(data);
	}));
}); 
