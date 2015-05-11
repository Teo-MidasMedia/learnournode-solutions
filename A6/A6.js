//my modules
var filter = require('./filter');

//my vars
var dir_path = process.argv[2];
var file_ext = process.argv[3];

filter(dir_path, file_ext, function (error, data){
	if (error){
  		console.log('Error');
  	} else {
		for(i = 0; i < data.length; i++){
			console.log(data[i]);
		}
	}
});
