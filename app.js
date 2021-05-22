// server behind the hood accepts REQUEST  and triggers a event emitter that responds to the request




//  EVENTS HAS SOMETHING TO DO WITH RESPONSE
const eventClass = require('events');




//SERVERS DOES THINGS WITH REQUEST AND TRIGGERS A RESPONSE SOMEWHAT WITH THE HELP OF 
//A "EVENT EMITTER"(I.E EVENTS) IN THIS EXAMPLE IT IS DEFIENED AS EVENT OBJECT
const http = require('http');
const server = http.createServer((req,res) =>{
    //res('welcome')
});
const eventObject = new eventClass();

eventObject.on('response' , (response) =>{
    console.log('hello world');
    
})


eventObject.on('response' , (name , age)=>{
    console.log(`im the first reponse from ${name} who is ${age}`);
})
 server.on('request' ,(req,res)=>{
     console.log('server request response');
     res.end('welcomeyyy')
 })

 server.listen('3000')
eventObject.emit('response' , 'gayu' , '22');
eventObject.emit('response');