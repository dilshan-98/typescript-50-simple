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
; //Output = 1,2
var colors;
(function (colors) {
    colors[colors["Red"] = 5] = "Red";
    colors[colors["green"] = 6] = "green";
})(colors || (colors = {}));
; //Output = 5,2
var c = colors.Red;
console.log(c);
// let myVar: unknown = 10;
//type assertion for unknown
//(myVar as string).toUpperCase()
//to check if an object has a name property or not
var myVar = { name: "k" };
////// let myVar: {name: unknown, age: unknown} ={ name: "k", age: 20};
// "!!" or "double exclamation" makes the obj into boolean so here what returns is whether obj is true or false. This
// checks in here, whether the obj is really a object or not
/* What this means is that: function hasName takes in an object type of any and return a object where it contains
a property "name" that's type of string.
Then it checks for the object to be a real object or ... and return treu or false */
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVar)) {
    console.log(myVar.name);
    //////console.log(myVar.name + myVar.age)
}
var multiType;
multiType = 10;
multiType = "hi";
function add(num1, num2) {
    return "Done";
}
add(5, 6);
// add();  ---> Errors returned 
function optional(num1, num2) {
    return "Done";
}
optional(5);
function defaultFunc(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
defaultFunc(6);
//Interfaces p1: fucntion with object types
function fullName(person) {
    return person.fName + person.lName;
}
var p = {
    fName: "Fii",
    lName: "hiii"
};
var x = fullName(p);
console.log(x);
//We can have optional parameters inside interfaces as well
// interface person {
//     fName: string,
//     lName?: string
// }
function fName(personI) {
    return personI.fName + personI.lName;
}
var pI = {
    fName: "HJK",
    lName: "POI"
};
var y = fName(pI);
console.log(y);
