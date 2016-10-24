var express = require('express');
var app = express();

app.get('/blocks', function(request, response){
	response.redirect(301,'/parts'); /*301 bisa dihilangkan, maka stasus akan default 302*/
	var blocks = ['fixed', 'movable', 'rotating'];
	response.json(blocks);
});

app.listen(3000, function() {
	console.log('listening on port 3000...');
});