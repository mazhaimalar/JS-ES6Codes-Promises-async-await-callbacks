//synchronous



const {readFileSync , writeFileSync} = require('fs');


const first = readFileSync('./CONTENT/first.txt' , 'utf-8');
const second = readFileSync('./CONTENT/SUBCONTENT/second.txt' , 'utf-8');



console.log(first , second);

console.log('start');
writeFileSync('./CONTENT/SUBCONTENT/third.txt' 
, `this is the third file that was created while executing . ${first} and ${second} were already existing files` , {flag  : 'a'})
console.log('end');
