var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send('hello world');
});

app.get('/blocks', function(request, response) {
	var blocks = ['fixed', 'movable', 'rotating'];
	response.send(blocks);
});

app.listen(3000, function() {
	console.log('listening on port 3000')
});

//file ini sudah diubah