var someValue = 10;
var someOtherValue = someValue * 2;

console.log(someValue, someOtherValue);

//- Created, executed and destroyed 
//- IIFE allowes you to create self contained modules
var module = (function() {
    var someValue = 100;
    var someOtherValue = someValue * 2;

    console.log(someValue, someOtherValue);
    var someMethod = function() {
        //do something.
        console.log(".. Inside someMethod");
        return someOtherValue;
    };

    return {
        someValue: someValue,
        someMethod: someMethod
    };
}());

console.log('Module someValue: ' + module.someValue);
console.log('Module someMethod: ' + module.someMethod());

(function() {
    var someValue = 1000;
    var someOtherValue = someValue * 2;

    console.log(someValue, someOtherValue);
}());
