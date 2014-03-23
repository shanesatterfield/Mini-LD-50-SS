var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response){
	
	var path = url.parse( request.url ).pathname;
	if( !path || path == '/' )
		path = '/index.html'

	path =  '.' + path;

	if( path == './favicon.ico' )
		return;

	fs.readFile(path, function( err, html ){
		if( err )
			throw err;
		
		response.writeHead({'content-type': 'text/html'});
		response.write(html);
		response.end();

	});

}).listen(8000);

console.log('You are now connected to http://127.0.0.1:8000');