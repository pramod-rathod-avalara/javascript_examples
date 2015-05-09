var util = require('util');

var obj1 = {
    x: 10,
    y: 20
};

var obj2 = Object.create(obj1);
obj2.z = 30;
//obj2.prototype = obj1;

console.log(util.inspect(obj2, true, null));
console.log(obj2.x + ' ' + obj2.y);

console.log("-------------------------------");
//Inhertiance between objects

var objectOne = {
  x: 10,
  y: {
    z: 20
  }
};

//RHS prototype chain is followed.
var objectTwo = Object.create(objectOne);

//LHS has no prototype chain is followed. Instead new instnace varibale is created with the name.
//X is not updated
objectTwo.x = 100;
//Z is updated
objectTwo.y.z = 200;

console.log(util.inspect(objectTwo, false, null));
console.log(objectOne);
