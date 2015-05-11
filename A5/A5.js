//core modules
var fs = require('fs');
var path = require('path');

//my vars
var dir_path = process.argv[2];
var file_ext = process.argv[3];

fs.readdir(dir_path, function(error, data){
	if(error){
		console.log('Error!');
	} else {
		for(i = 0; i < data.length; i++){
			if (path.extname(data[i]) === '.' + file_ext){
      			console.log(data[i]);
			}
		}
	}
});
