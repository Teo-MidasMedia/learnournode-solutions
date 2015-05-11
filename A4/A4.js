//core modules
var fs = require('fs');

//my vars
var file_path = process.argv[2];
var file_contents = fs.readFile(file_path);

fs.readFile(file_path, function(error, data){
	var output = data.toString().split('\n').length - 1;
	if (error){ 
		console.log('Error!');
	} else {
		console.log(output);
	}
});
