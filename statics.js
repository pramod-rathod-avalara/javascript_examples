var Point = function Point(x, y) {
    this.x = x;
    this.y = y;
    Point.staticAttr = "30";

    //Static variables
    console.log(Point.staticAttr);
};


//Create object
var p = new Point(2, 3);
console.log(p);

//~~~~~~~~~~~~~~~~~~~~~~~~~~
//:~ Example of inheritance
//~~~~~~~~~~~~~~~~~~~~~~~~~~
var Point3D = function Point3D(z) {
    this.z = z;

    this.getZ = function getZ() {
        return 'Z is ' + this.z;
    };
};

Point3D.prototype = p;
Point3D.prototype.constructor = Point3D;
var p3d = new Point3D(4);
console.log(p3d);