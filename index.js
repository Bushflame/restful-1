/*
*
*
*
*
*/
//dependencies
var http = require('http');
var url = require('url');

//respond to all requests with a string
//create server with 2 deps which get sent down after every req
//function is called every time someone hits localhost3000
var server = http.createServer(function(req,res){
    //create var to get  req url and parse it - inc querystring data
    var parsedUrl = url.parse(req.url,true);
    // var get untrimmed url path
    var path = parsedUrl.pathname;
    //var to trim path with a regex to give clean url with no slashes etc
    var trimmedPath = path.replace(/^\/+|\/+$/g,'');
    //send respond
    res.end('hello world\n')
    //logout requested path
    console.log('request received on path '+trimmedPath)


});//end create server function

//start server - listen on port ???? - give cb function to say listening
server.listen(3000, function(){
    console.log('listening on 3000')
});
//to see output run node index.js
//then curl localhost:3000 in new pane
// step 2
//to see output run node index.js
//then curl localhost:3000/foo/ in new window
// go to server pane
// note how path is trimmed
