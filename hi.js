var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// app.get ( website, function ( request, response ) ) {}
app.get( '/', function( req, res ) 
{
	res.send('Hello World');
});

app.listen( 3000, function() 
{
	console.log('Server started on Port 3000.');
});