const {readFile , writeFile} = require('fs');
const util = require('util') // a inbulit function that takes functions as arguments and returns as promises

const ReadFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile)


//### the below chunk of code is basically what happens behind the scene when we use .promisify or .promises built in function
const Promising = (path)=>{
return new Promise((resolve , reject) =>{
    readFile(path , 'utf-8', (err , result) =>{
        if(err){
            reject(err)
        }
        else{
            //console.log(result);
            resolve( result);
        }
    });
})
} 
//const start = async() =>{
//    const first = await Promising('./CONTENT/first.txt' , 'utf-8');
//    console.log(first);
//    const second = await Promising('./CONTENT/SUBCONTENT/second.txt' , 'utf-8');
//    console.log('gggg' + second);
//
//}
//const start = async () =>{
//    try {
//        const first = await ReadFilePromise('./CONTENT/first.txt' , 'utf-8');
//    console.log("dddd" + first);
//    const second = await ReadFilePromise('./CONTENT/SUBCONTENT/second.txt' , 'utf-8');
//    console.log('dddd' + second);
//    await writeFilePromise('./CONTENT/SUBCONTENT/fifth.txt' , `this is awesome : ${first}
//     ${second}`)
//        
//    } 
//    catch (error) {
//       console.log(error); 
//    }
//    
//}


//start()

console.log('dfdfd')

// if we didnt use async await with try and caych block then wefollow the following code with then and catch block

Promising('./CONTENT/first.txt' , 'utf-8')
.then((result) => console.log(result))
.catch((err) => console.log(err));
Promising('./CONTENT/SUBCONTENT/second.txt' , 'utf-8')
.then((result) => console.log(result))
.catch((err) => console.log(err));

//const creatingPromiseRead = readFile('./CONTENT/first.txt' , 'utf-8', (err , result) =>{
//    if(err){
//        return
//    }
//    else{
//        console.log(result)
//        return result
//    }
//});
//const creatingPromiseWrite = writeFile('./CONTENT/SUBCONTENT/second.txt');


