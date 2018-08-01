// create server - listen - give basic output
// run in bash
// run curl

//dependencies
var http = require('http')
//************************************ //
//create server with 2 deps which get sent down after every req
   var server = http.createServer(function(req,res){
        
    
    //send response
    res.end('Hello this is the server calling');
});//end create server function
//***************************************//
//start server - listen on port 3000 - give cb function to say listening
 //server listen function
    server.listen(3000,function(){
        console.log('server listening on port 3000')
    })


//to see output run
//node index.js
//then
//curl localhost:3000       in new window
