// create server - listen - give basic output
// run in bash
// run curl

//dependencies
var http = require('http');
var url = require('url');
//************************************ //
//1 create server with 2 deps which get sent down after every req
var server = http.createServer(function(req,res){
    
// 2 create var to get  req url and parse it - inc querystring data 
    var parsedUrl = url.parse(req.url, true);
    
// 2 var get untrimmed url path
    var path = parsedUrl.pathname;

// 2 var to trim path with a regex to give clean url with no slashes etc  
    var trimmedUrl = path.replace(/^\+|\/+$/g,'');
    
// 3 get http method POST GET etc - change to upper case  result added to output below
    var method = req.method.toUpperCase()
    
// 1 send response
    res.end('Hello from server land\n')
    
// 2 & 3 logout requested path and method
    console.log('responding to request on path'+trimmedUrl+' with method '+method)

});//end create server function
//***************************************//
// 1 start server - listen on port ????- give cb function to say listening
// 1 create port var to save having to change in different places
    var port = 8000;
    server.listen(port,function(){
        console.log('server listening on port '+port)
    })
 //end server listen function


//to see output run node index.js
//then curl localhost:3000 in new pane
// step 2
//to see output run node index.js
//then curl localhost:8000/foo/ in new window
// go to server pane
// note how path is trimmed