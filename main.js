"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello " + this.employeeName);
    };
    return Employee;
}());
var emp = new Employee("Kil");
console.log(emp.employeeName); //--> This can only be accessed because the variable is public inside the class
emp.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.bue = function () {
        console.log("Bye " + this.employeeName);
    };
    return Manager;
}(Employee));
var mgr = new Manager("Oil");
console.log(mgr.employeeName);
mgr.bue();
mgr.greet();
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.id, " is now registered");
    };
    return Person;
}());
var pperson = new Person(4, "Din");
console.log(pperson.register());
var Exemployee = /** @class */ (function (_super) {
    __extends(Exemployee, _super);
    function Exemployee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Exemployee;
}(Person));
var exe = new Exemployee(100, "gg", "dev");
console.log(exe.register());
// function getArray(items: any[]): any[] {
//     return new Array().concat(items)
// }
// let a = getArray([1,2,3])
// let b = getArray(["a", "b"])
// console.log(b)
// a.push("hi")
// console.log(a)
function getArray(items) {
    return new Array().concat(items);
}
var a = getArray([5, 10, 99]);
var b = getArray(["h", "hhhh"]);
console.log(a);
console.log(b);
