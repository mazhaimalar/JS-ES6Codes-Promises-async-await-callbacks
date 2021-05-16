const {readFile , writeFile} = require('fs');


readFile('./CONTENT/first.txt','utf-8',(err , result) =>{
    if(err){
        console.log(err);
        console.log("error found in first file");
        return
    }
    //console.log(result );
    const first = result ;
    readFile('./CONTENT/SUBCONTENT/second.txt' , 'utf-8', (err , result)=>{
        if (err){
            console.log(err)
            console.log("error found in second file");
            ;
        }
        const second = result;
        writeFile('./CONTENT/fourth-async' , `contains first and second file : 
        ${first} ${second}` , (err , result) =>{
            if (err){
                console.log(err);
                err;
            }
            console.log(result);

        })
    });

    
});