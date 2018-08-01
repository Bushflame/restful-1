// create server - listen - give basic output
// run in bash
// run curl

//dependencies
var http = require('http')
var url = require('url')
//************************************ //
//create server with 2 deps which get sent down after every req
var server = http.createServer(function(req,res){
//create var to get  req url and parse it - inc querystring data 
    var parsedUrl = url.parse(req.url,true);
    
// var get untrimmed url path
   var path = parsedUrl.pathname; 
//var to trim path with a regex to give clean url with no slashes etc  
   var trimmedUrl = path.replace(/^\+|\/+$/g,'')
//send response
    res.end('hello world\n');
    
//logout requested path
    console.log('responding to query on path'+trimmedUrl);

});//end create server function
//***************************************//
//start server - listen on port 3000 - give cb function to say listening
 //end server listen function
server.listen(8000,function(){
    console.log('listening on port 8000')
})



//to see output run node index.js
//then curl localhost:3000 in new pane
// step 2
//to see output run node index.js
//then curl localhost:8000/foo/ in new window
// go to server pane
// note how path is trimmed
