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


