/*
  
  Best practices
  ~~~~~~~~~~~~~~~
  + Decalre a variable as soon as possible, must be the first line of the function
  + Function as a statement or as an expression? I missed this part, come back for the best practice here
  + Always put function opening culry braces on the same line

*/
global.someVariable = 'some value';

function someFunction() {
  console.log(" 1 > " + someVariable);          // 1
  console.log(" 2 > " + global.someVariable);   // 2

  var someVariable = 'some other value';
  console.log(" 3 > " + someVariable);          // 3
  console.log(" 4 > " + global.someVariable);   // 4

  return function() {
    console.log(" 5 > " + someVariable);        // 5
    console.log(" 6 > " + global.someVariable); // 6
    
    var abc = 123;

    return function () {
      console.log('a > ' + someVariable);
      console.log('b > ' + global.someVariable);
      console.log('abc > ' + abc);
    };
  };
  console.log(" 7 > " + someVariable);          // 7
}

console.log(" 8 > " + someVariable);            // 8

var returnedFunction = someFunction();

console.log(" 9 > " + someVariable);            // 9

returnedFunction()();

console.log("10 > " + someVariable);            // 10