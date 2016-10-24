var express = require('express');
var app = express();

app.get('/blocks', function(request, response){
	response.redirect('/parts');
	var blocks = ['fixed', 'movable', 'rotating'];
});

app.listen(3000, function() {
	console.log('listening on port 3000...');
});