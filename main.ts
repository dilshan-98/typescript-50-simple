//to get rid of the error on the "let message" because this is a script file but not a module; we export null 
export {}

let message = "Hello World";

console.log(message);

let arr1: number[] = [1, 2, 3];

let arr2: Array<number> = [4, 5, 6];

let person: [string, number] = ["Dinusha", 20];

enum color {Red, green};  //Output = 1,2
enum colors {Red=5, green}; //Output = 5,2

let c: color = color.Red;
console.log(c)

let myVar: unknown = 10;

//type assertion for unknown
(myVar as string).toUpperCase()

