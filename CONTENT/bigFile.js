
const {writeFileSync} = require('fs');


for( let i = 0 ; i<= 1000 ; i++ ){
   writeFileSync( './CONTENT/big.txt' ,` good morning ${i} \n` ,{flag : 'a'} );
}