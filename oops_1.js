/**del

  Best Practices
  ~~~~~~~~~~~~~~
   + Any function that is used with new is called constructs
   + Following coding standards is must in javascript.
   + Constructor function should always be named as Pascal case, while all non constructor function should be named as camel case.

**/

"use strict";

//ECMA Script 5 default mode will use these values 
//Where as ECMA Script 5 'strict' mode will give errors.
global.x = 1000;
global.y = 2000;

var Point = function Point(x, y) {
    this.x = x;
    this.y = y;
    var abc = 100;

    //this keyword will achive method prototyping.
    this.getX = function getX() {
        return 'X is ' + this.x;
    };

    this.getY = function getY() {
        return 'Y is ' + this.y;
    };

    //~~~~~~~~~~~~~~~~~~
    // Public methods
    //~~~~~~~~~~~~~~~~~~

    this.publicMethod = function() {
        privateMethod();
        console.log(abc, this.x, this.y);
    };
    var that = this;
    //~~~~~~~~~~~~~~~~~~
    // Private methods
    //~~~~~~~~~~~~~~~~~~
    var privateMethod = function privateMethod() {
        console.log('Inside a private method.. ');
        //ECMA Script 5 default mode will use these values from global variable
        //console.log(abc, this.x, this.y);
        //ECMA Script strict mode
        console.log(abc, that.x, that.y);
    };
};

//Create object
var p = new Point(2, 3);
console.log(p);
p.publicMethod();

//~~~~~~~~~~~~~~~~~~~~~~~~~~
//:~ Example of inheritance
//~~~~~~~~~~~~~~~~~~~~~~~~~~
var Point3D = function Point3D(z) {
    this.z = z;

    this.getZ = function getZ() {
        return 'Z is ' + this.z;
    };
};

//Changing prototype and its contructor is mandatory to avoid surprizing errors :) .. 
Point3D.prototype = p;
Point3D.prototype.constructor = Point3D;
var p3d = new Point3D(4);
console.log(p3d);
//console.log('{ x: ' + p3d.x + ', y: ' + p3d.y + ', z: ' + p3d.z + ' }');
