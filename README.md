# typescript-50-simple

1. To get rid of the error on the "let message" because this is a script file but not a module; we export null on the .ts file and it will be showned in the .js file.
 in .ts --> export {}
 in .js --> "use strict";
            exports.__esModule = true;


2. Transpyle .ts into .js:
 tsc <file_name.ts>


3. To watch for changes and transpyle .ts into the .js automatically 
 tsc <file_name.ts> --watch


4. Variable Declarations: only "let" and "const"
 let --> for changing values and can declare without assigning a value
 const --> for non changing values like "title". Must declare with an assigned value.

5. Variable Types (number, string, boolean)
 
 i) Helps in static type checking before production (won't execute until types are fixed).

 ii) Help in intellisense (suggest suitable methods for each variable type: Ex: let num: number = 10; So, "number." this suggest suitable methods)


6. Array Types (of same type)
 
 * No benefit of using either one, both are same.

 i) let arr1: number[] = [1, 2, 3];

 ii) let arr2: Array<number> = [4, 5, 6];


7. Array Types (multiple types)

 We need to define the array size when assigning values to this array.

 let person: [string, number] = ["Dinusha", <size>];


8. "enum" types

 Random names for variables 

 Ex: enum color {Red, green};
     let c: color = color.Red;
     console.log(c)


9. "any" type

 useful when you don't know the actual type of the variable. Can assign any type of a value to this variable.

 let name: any = 10;


10. "unknown" type to replace "any" type. T
        24min continue in video 


11. Type Assertions for "unknown" type errors. 