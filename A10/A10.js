//installed modules
var net = require('net');
var strftime = require('strftime');

var date = '';
var server = net.createServer(function(socket){
	date = strftime('%F %H:%M', new Date());
	socket.write(date + '\n');
	socket.end();
});
server.listen(process.argv[2]);
