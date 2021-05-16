//Modules
//modulesis used to break up complex code into small small thiings i.e modules


// importing the operation module
const names = require('./2-names.js')
const sayHi = require('./2-operation.js');
const ano  = require('./2-alternative');

//We invoke the func
console.log(ano);
sayHi(names.cate);
sayHi(names.mat);
sayHi(names.john);

// when trying to acces the values of the module make sure to access the property along with the function assigned to that property i.e property.funcyion()
ano.ano() ;



//note:
// ***************every file is a module *********
// modules helps to ************ENCAPSULATE***************
//i.e  we are in control of what we share to other modyles
