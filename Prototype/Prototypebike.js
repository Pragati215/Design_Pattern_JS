/*******************************************************************************************************
 * @problem :  write a program to implement Prototype Design Pattern
 * @fileName : Prototypebike.js
 * @Auther  : Pragati D
 *******************************************************************************/
var Bike = function (brand) {
    this.brand = brand;
};

Bike.prototype = {
    goForward: function (percent) {
        percent = ' Bike Moving forward at ' + percent + ' percent speed!';
        return percent;
    }
};


var myNamespace = myNamespace || {};

// Define a constructor //
myNamespace.Bike = function (brand) {
    this.brand = brand;
};

// Set the prototype //
myNamespace.Bike.prototype = {
    goForward: function (percent) {
        percent = ' Bicycle Moving forward at ' + percent + ' percent speed!';
        return percent;
    },

    slowDown: function (percent) {
        percent = ' Bicycle Applying ' + percent + ' brake pressure.  Slowing down now.';
        return percent;
    }
};

// Calling the code using namespaces //
var bike = new myNamespace.Bike('ProdecoTech');
var speed = bike.goForward(70);
console.log(speed)

var anotherbike = new myNamespace.Bike('Specialized');
var anotherspeed = anotherbike.slowDown(60);
console.log(anotherspeed)

var mountainbike = new myNamespace.Bike('Cannondale');
var mbikespeed = mountainbike.slowDown(75);
console.log(mbikespeed)

