//core modules
var http = require('http');

//installed modules
var concatStream = require('concat-stream');

//my vars
var arr = [];
var collected = 0;
var urls = process.argv.slice(2);
var holder = '';

function getData(i){
	http.get(urls[i], function(response){
		response.pipe(concatStream(function(data){
			data = data.toString();
			holder += data;
		}));
		response.on('end', function(){
			arr[i] = holder;
			collected ++;
			if(collected == (process.argv.length - 2)){
				theResults();
			}
		});
	}); 
}

function theResults(){
	arr.forEach(function(data){
		console.log(data);
	});
}

for(var i = 0; i<3; i++) {
	getData(i);
}
