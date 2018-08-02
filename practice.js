// create server - listen - give basic output
// run in bash
// run curl
// + get headers
// + parsing payload
//dependencies
var http = require('http');
var url = require('url');
var StringDecoder = require(string_decoder).StringDecoder;

//************************************ //
//1 create server with 2 deps which get sent down after every req
var server= http.createServer(function(req,res){

// 2 create var to get  req url and parse it - inc querystring data
var parsedUrl = url.parse(req.url, true);
// 2 var get untrimmed url path
var path = parsedUrl.pathname;

// 2 var to trim path with a regex to give clean url with no slashes etc
var trimmedUrl = path.replace(/^\+|\/+$/g,'');

// 4 get query string as an object 
var queryStringObject = parsedUrl.query;

// 3 get http method POST GET etc convert to upper case
var method = req.method.toUpperCase();



// 5 get headers as an object  ********************************  5
var headers = req.headers;

// 5 get any payload with new string StringDecoder to collect stream
// uses node built in feature - streams to know when stream starts and ends
// switch postman to post for this test
var decoder = new StringDecoder('utf-8');
    // var to hold stream
var buffer = '';
        // function to append buffer when data begins streaming in
req.on('data', function(data){
    buffer += decoder.write('data')
});
        // function for when data string ends
req.on('end',function(data){
    buffer += decoder.end()
});
        // move responses into end function anc change logout to log payload
        // 1 - 5 send response
res.end('hello world');
          // 5 new logout uses postman for testing payload (buffer)= comma separated********************** 5
console.log('request reponse to whatever is', buffer)

        });//end create server function
//***************************************//
// 1 start server - listen on port ????- give cb function to say listening
// 1 create port var to save having to change in different places
var port = 8000;
servre.listen(port, function(){
    console.log('Listening on port'+ port)
})
 // end server listen function


//to see output run node index.js
//then curl localhost:3000 in new pane
// step 2
//to see output run node index.js
//then curl localhost:8000/foo/ in new window
// go to server pane
// note how path is trimmed


