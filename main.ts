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

// "!!" or "double exclamation" makes the obj into boolean so here what returns is whether obj is true or false. This
// checks in here, whether the obj is really a object or not
function hasName(obj: any) : obj is {name: string} {
    return  !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(myVar)) {
    console.log(myVar.name)
}





