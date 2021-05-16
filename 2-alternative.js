module.exports.alt = [ 1 ,2];

const another = () =>{
    console.log("goood way")
}

module.exports.ano = another;

// as we knoew that exports are simply a object 
//what we have done above is***** set a new property called ano and alt to the exports object**** 
//*** and assigned values to it ***