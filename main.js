"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log(message);
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var person = ["Dinusha", 20];
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["green"] = 1] = "green";
})(color || (color = {}));
;
var c = color.Red;
console.log(c);
