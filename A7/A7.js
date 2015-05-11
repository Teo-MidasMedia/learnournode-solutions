//core modules
var http = require('http')

//my vars
var url = process.argv[2];

http.get(url, function(response){
	response.on('error', function(error){
		console.log('Error!');
	});
	response.setEncoding('utf8');
	response.on('data', function(data){
		console.log(data);	
	});
});
