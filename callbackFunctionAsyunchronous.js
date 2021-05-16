

const http = require('http');




console.log("start");
//when we have to async func with same call time then the callbacks get executed in order after running all the blocking code

setTimeout( function (){
console.log('first setTimeout output');
},0);
setTimeout(function(){
    console.log("second setTimeout output");
},0);
console.log('end');

// asynnchronous ---- code gets '''off-loaded'''

const server = http.createServer((req,res)=>{
    console.log('server running');
    console.log('weeeeeeeeeee');
    res.end('server disconnected')
});
//make sure no other terminal is running the same process at the same time . always sure to kill other terminals
server.listen(8080 ,  ()=>{
    console.log('sttarting the server')
})
//once the server satrts listening in the specified port(8080 as per our example), our calllback function,
//()=>{
  //  console.log('sttarting the server')
//} is executed

// the moment a function accepts a function as argument it becomes a callback function ...i.e it becomes asynchronoous