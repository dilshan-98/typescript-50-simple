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

 ****Can assign any value and can define any method or call as a function even though it isn't a one using "<variable_name>." or "<variable_name>()"

 let name: any = 10;

 Ex: let myVar: any = 10;
     myVar.name------
     myVar() -------- These can be done in here because the type is here even though the variable doesn't define these - -methods ...


10. "unknown" type to replace "any" type. T
 
 ****Can assign any value and BUT CAN NOT define any method or call as a function when it isn't a one "<variable_name>." or "<variable_name>()" --> This can't be done if the variable isn't a one

 Ex: let myVar: unknown = 10;
     myVar.name------
     myVar() -------- These can't be done in here


11. Type Assertions for "unknown" type errors. 

 Similar to type casting where we say to use this type for the variable so the function is available. 

 Ex: let myVar: unknown = 10;
     (myVar as string).toUpperCase()  -----Here we can use this method as the system sees it as a string 


12. User defined type guards
 
 Since having "unknown" as a type, gives errors when calling methods ("myVar.name" --> This returns errors becuase in the variable it is not an object (as per 11 example), there is no such property called "name" and the type is unknown); it is beneficial to define type guards by ourselves to get reid of that error popping. 

 Ex: 
        //to check if an object has a "name" property or not

        let myVar: {name: unknown} ={ name: "k"}; --> modified above variable to be an object so we can get an output.
        //If it was kept as earlier, there will be no output since it checks out 2/3 issues I mmentioned earlier

        // "!!" or "double exclamation" makes the obj into boolean so here what returns is whether obj is true or false. 
        // This checks in here, whether the obj is really a object or not
        function hasName(obj: any) : obj is {name: string} {
                return  !!obj &&
                        typeof obj === "object" &&
                        "name" in obj
        }

        if(hasName(myVar)) {
                console.log(myVar.name)  --> Output = k
        }


13. Type Inference 

 If you declare a variable but doesn't assign a value right there (let a;), this can be used to declare different types of values: 
        a = 10; , a = "Hi;

 But, if you declare a variable and assign a value right there (let b = 10;); this can't be used to declare other types of varibles that are different to the one declared already:
        b = "Hi"; --> This won't work since the type for this variable is already a number.


14. 