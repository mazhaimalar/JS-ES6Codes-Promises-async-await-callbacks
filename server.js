const http = require('http');

const server = http.createServer((req , res)=>{
    
    
    if (req.url === '/'){
    res.end("hello world");
    }
   
   
    else if (req.url === '/view'){
        res.end("we are in view");
        }
//console.log(res)
    
    else if (req.url   === '/about'){
        res.end('we are in the about page');
    }
    
    
    else{
        res.end('<h1>ooops</h1> <p> doesnt exist</p>')
    }


})

server.listen(3000)