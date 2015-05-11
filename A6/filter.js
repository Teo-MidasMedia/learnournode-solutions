//core modules
var fs = require('fs');
var path = require('path');

module.exports = function (dir_path, file_ext, callback) {
	fs.readdir(dir_path, function(error, data){
		if(error){
			return callback(error);
		} else {
			data = data.filter(function(file_list){
				return path.extname(file_list) === '.' + file_ext;
			});
		}
		callback(error, data);
	});
}
