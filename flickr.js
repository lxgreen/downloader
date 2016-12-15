var credentials = require("api_key.json");
var Flickr = require("flickrapi");

Flickr.authenticate(credentials, function(error, flickr) {
	if(!error){

	}
	else{
	}
});