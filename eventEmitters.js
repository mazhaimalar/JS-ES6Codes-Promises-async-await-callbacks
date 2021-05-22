const eventEmitterClass = require('events');
const eventEmitter =  new eventEmitterClass();

//eventEmitter.on('response' , function BoundToeventEmitter(){
//    console.log(this._events.response);
//})
//
//eventEmitter.on('response', function secondListener(){
//    console.log(this);
//})
//
//
//eventEmitter.emit('response');


/////////////////////////////////////////////study again///////////////////////////////////

class EventExplain extends eventEmitterClass {
   
    check(success){
        console.log(this)
    if(success === 'error'){
        console.log('error');
    }
    else {
        this.emit('success' );
           
    } 
}
}

const obj = new EventExplain()
obj.on('success' , function success(){
    console.log('success');
});
obj.check('success')
obj.check('error' )