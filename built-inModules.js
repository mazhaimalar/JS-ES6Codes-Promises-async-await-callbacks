// os module


const { Console } = require('console');//as this is a built in func we simply put func within '' without ./
const os = require('os');
console.log( os.version());

const user = os.userInfo();
console.log(user);
const uptime = os.uptime();
console.log(uptime);

const path = require('path');
//console.log(path.sep);

const filepath = path.join('/CONTENT/' , 'SUBCONTENT' , 'TEXT.txt');
console.log(filepath);

console.log(__dirname);


const absolute = path.resolve(__dirname , 'CONTENT' ,'SUBCONTENT' , 'TEXT,txt');

console.log(absolute);