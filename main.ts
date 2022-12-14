//to get rid of the error on the "let message" because this is a script file but not a module; we export null 
export {}

let message = "Hello World";

console.log(message);

let arr1: number[] = [1, 2, 3];

let arr2: Array<number> = [4, 5, 6];

let person: [string, number] = ["Dinusha", 20];

enum color {Red, green};  //Output = 1,2
enum colors {Red=5, green}; //Output = 5,2

let c: colors = colors.Red;
console.log(c)



// let myVar: unknown = 10;

//type assertion for unknown
//(myVar as string).toUpperCase()



//to check if an object has a name property or not

let myVar: {name: unknown} ={ name: "k"};
////// let myVar: {name: unknown, age: unknown} ={ name: "k", age: 20};

// "!!" or "double exclamation" makes the obj into boolean so here what returns is whether obj is true or false. This
// checks in here, whether the obj is really a object or not

/* What this means is that: function hasName takes in an object type of any and return a object where it contains 
a property "name" that's type of string. 
Then it checks for the object to be a real object or ... and return treu or false */
function hasName(obj: any) : obj is {name: string} {
    return  !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(myVar)) {
    console.log(myVar.name)
    //////console.log(myVar.name + myVar.age)
}


let multiType: number | string;

multiType = 10;
multiType = "hi";


function add (num1: number, num2: number): string {
    return "Done";
}

add(5, 6);
// add();  ---> Errors returned 


function optional (num1: number, num2?: number): string {
    return "Done";
}

optional(5);


function defaultFunc (num1: number, num2: number = 10): number {
    return num1 + num2;
}

defaultFunc(6);


//Interfaces p1: fucntion with object types
function fullName(person: {fName: string, lName: string}): string {
    return person.fName + person.lName;
}

let p = {
    fName: "Fii", 
    lName: "hiii"
};

let x: string = fullName(p);
console.log(x)



//Interfaces p2: fucntion with interface
interface person {
    fName: string,
    lName: string
}

//We can have optional parameters inside interfaces as well
// interface person {
//     fName: string,
//     lName?: string
// }

function fName (personI: person) {
    return personI.fName + personI.lName;
}

let pI = {
    fName: "HJK",
    lName: "POI"
}

let y: string = fName(pI);
console.log(y)



class Employee {
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log("Hello "+this.employeeName);
    }
}

let emp = new Employee("Kil");
console.log(emp.employeeName); //--> This can only be accessed because the variable is public inside the class
emp.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    bue(){
        console.log("Bye "+this.employeeName);
    }
}

let mgr = new Manager("Oil");
console.log(mgr.employeeName)
mgr.bue()
mgr.greet()



interface uInterface {
    id: number,
    name: string,
    register(): string
}

class Person implements uInterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.id} is now registered`
    }
}

const pperson = new Person(4, "Din");
console.log(pperson.register())

class Exemployee extends Person {
    position: string;

    constructor (id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }

}

const exe = new Exemployee(100, "gg", "dev");

console.log(exe.register())



// function getArray(items: any[]): any[] {
//     return new Array().concat(items)
// }

// let a = getArray([1,2,3])
// let b = getArray(["a", "b"])

// console.log(b)

// a.push("hi")
// console.log(a)

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let a = getArray<number>([5, 10, 99]);
let b = getArray<string>(["h", "hhhh"]);

console.log(a);
console.log(b)
