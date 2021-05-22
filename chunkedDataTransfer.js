const fs = require('fs') 
//const {createReadStream} = require('fs');
 const http = require('http');
 //create a server instance
 const server = http.createServer((req,res)=>{
 //create a variable and get the data from the text file through 'createReadStream module from fs module'
 // it transfers date in chunks. the size of the chunk can be changed by changing the buffer size . i.e highWatreMark property
        const ReadFileStream = fs.createReadStream('./CONTENT/big.txt' , 'utf8' , 'highWaterMark : 8000 ');
        //make sure the path of the file is correct
        //use the 'open' event of thr readStream instance to open the file path in the createReadStream method
        ReadFileStream.on('open' ,() =>{
                //console.log('entered');
                //.pipe() is used to Write the data that has been read 
                ReadFileStream.pipe(res)
        })
        //ReadFileStream.on('open' ,()=>{
        //ReadFileStream.pipe();
        })
     
 


 
 server.listen('3000');


 