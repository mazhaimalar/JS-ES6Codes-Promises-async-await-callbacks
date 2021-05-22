var SLICE = Array.prototype.slice;
//there is 2 objects initially when we start our code
// 1. global object contains 
//2. javascript object
//           ||||||||||||||||||||||||||||||||||||||||||||||||||
//           ||                           global             ||
//           ||                                              ||
//           ||||||||||||||||||||||||||||||||||||||||||||||||||
//           ||some scope not sure what it is yet  for,      ||                                                
//           ||now let us call it as javascript object scope ||     ||                                      
//           ||||||||||||||||||||||||||||||||||||||||||||||||||                                              
//           ||                                              ||
//           ||                                              ||
//           ||      when we go into other scopes            ||
//           ||                                              ||
//           ||                                              ||
//           ||||||||||||||||||||||||||||||||||||||||||||||||||
//           ||||||||||||||||||||||||||||||||||||||||||||||||||
  var attach = function(method) {
    var args = SLICE.call(arguments, 1);
    //arguments is an array-like object which contains the argumnents passed to the function
    console.log(args);
    console.log(arguments+'eeeee')
    return function() {
      method.apply(null, args.concat(SLICE.call(arguments, 0)));
      // apply and call methods are used to call object methods and pass in another object 
      // in apply(null , arguments) null refers to the object. If we dont want to pass any object we use null or undefined
    };
  };

  function foo(param1, param2, param3) {
    console.log(param1, param2, param3);
  };

  var bar = attach(foo, 1, 2);
  bar(3);
  bar(4);