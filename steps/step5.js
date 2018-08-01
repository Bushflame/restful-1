// create server - listen - give basic output
// run in bash
// run curl
// + get headers
// + 
//dependencies
var http = require('http');
var url = require('url');
var stringDecoder = require('string_decoder').StringDecoder;

//************************************ //
//1 create server with 2 deps which get sent down after every req
 var server = http.createServer(function(req,res){
     
// 2 create var to get  req url and parse it - inc querystring data 
 var parsedUrl = url.parse(req.url, true);
// 2 var get untrimmed url path
 var path = parsedUrl.pathname;

// 2 var to trim path with a regex to give clean url with no slashes etc  
    var trimmedUrl = path.replace(/^\+|\/+$/g,'');
    
// 4 get query string as an object result added to output below
    var queryStringObject = parsedUrl.query;
    
// 3 get http method POST GET etc convert to upper case
    var method = req.method.toUpperCase();
    
// 5 get headers as an object  ********************************  5
    var headers = req.headers;
    
// 1 send response
  res.end('Hello World!!!\n');
    
// 2 & 3 & 4 logout requested path
// note ',' and not '+' at start of query string ** replaced below line in step 5
//console.log('Request being served for path '+trimmedUrl+' using the method '+method+' with the query sting params', queryStringObject);
// 5 new logout uses postman for testing ********************** 5
console.log('request received with these headers ', headers);
 });//end create server function
//***************************************//
// 1 start server - listen on port ????- give cb function to say listening
// 1 create port var to save having to change in different places
  var port = 8000;
  server.listen(port, function() {
   console.log('Server listening on port '+port);
  }); 
 // end server listen function


//to see output run node index.js
//then curl localhost:3000 in new pane
// step 2
//to see output run node index.js
//then curl localhost:8000/foo/ in new window
// go to server pane
// note how path is trimmed