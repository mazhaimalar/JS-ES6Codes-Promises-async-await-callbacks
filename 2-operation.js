//   ./  it kind of gives the path to the file 
//   if the module we import is a third party module or BUILT IN MODULES then we simply write the name of the file inside quotes eg . require("files")
// i basically create a module with require()
const nammes =require('./2-names');




// function has been created i.e an arrow function and the function object is assigned to the const variable sayHi

const sayHi = (namme) =>{
    console.log(`hello ${namme}`);
} ;

module.exports = sayHi;
// if we have only one thing to export we dont use {}