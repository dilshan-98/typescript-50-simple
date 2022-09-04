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


14. Union Types

 To overcome the above case and to have a type that is less vulnarable than "any".

 This can be used to define multiple types for a variable so the values can be declared that belongs to either declared type.

 Ex: let multiType: number | string;
     multiType = 10;
     multiType = "hi";

 **This is used mostly when the type is not under control of yours and to restrict to give freedom as "any" so that it won't assigned to any type.
 **Also has intellisence support (unlike for "any") in "<variable_name>."

15. Functions
 
 Ex: function add (num1: number, num2: number): number {
        return num1 + num2;
     }

     add(5, 6);
     add(); ---> This gives errors since the function expects 2 parameters 

15. (i) Optional parameter

        This is to define the parameters to be optional when calling a function
        
        Ex: function optional (num1: number, num2?: number): string {
                return "Done";
            }

            optional(5); ---> Only need to define first parameter since the second one is optional. You can either
                              define it or leave it. Just like in the example.

        ****Only thing is: you must define any optional parameters just after the required parameters. i.e, you can't define like this : "function optional (num1?: number, num2: number) {}"

    (ii) Default parameters

        To be used when the parameters are not defined fully. Just like optional parameters but with a set value instead of an undefined value.

        Ex: function defaultFunc (num1: number, num2: number = 10): number {
                return num1 + num2;
            }

            defaultFunc(6);  ---> Output here is 16 since there is a default value to be used when undeclared by user


16. Interfaces  (can't use with primitives and unions)

 ***Function with object types : without an interface declared

 Ex: 
        function fullName(person: {fName: string, lName: string}): string {
                return person.fName + person.lName;
        }

        let p = {
                fName: "Fii", 
                lName: "hiii"
        };

        let x: string = fullName(p);
        console.log(x)


***Function with interface

        interface person {
                fName: string,
                lName: string
        }

        function fName (personI: person) {
                return personI.fName + personI.lName;
        }

        let pI = {
                fName: "HJK",
                lName: "POI"
        }

        let y: string = fName(pI);
        console.log(y)

 ***We can have optional parameters inside interfaces as well
        interface person {
                fName: string,
                lName?: string
        }


17. Classes and Access modifiers

 17.1 Classes and Inheritance

        Ex: ----Normal Class-----

        class employee {
                empName: string;

                constructor(empname: string) {
                        this.empName = empname;
                }

                greet(){
                        console.log("Hi " + this.empName);
                }
        }

        let name = new employee("Dinusha");

        name.greet();
        console.log(name.empName);


        Ex: ----Inheritance Class-----

        class manager {
                constructor(mge: string){
                        super(mge);
                }

                calling(){
                        console.log("Calling "+ this.empName);
                }
        }

        let mgr = new manager("James");

        mgr.calling();
        mgr.greet();
        console.log(mgr.empName);


 17.2 Access modifiers (public, private and protected)

        Ex: class employee {
                public empName: string; ----> public: accessible for any, private: not accessible, protected: accessible 
                                                        by inherited classes only and within the func



<!-- From another video -->
18. Tuple Arrays

 Ex: let array: [number, string][]

     array = [
        [1, "a],
        [2, "b],
        [100, "zz"],
     ]


19. Type Assertions: extends from (11)
 
 Ex: let cid: any = 1;

     let custId = <number>cid; ---->

                OR

     let custId = cid as number; ---> This way, custId will only take number type from cid


20. "Void" Type

 Ex:    function x(name: string | number): void {        ----> for "console.log" etc.
                console.log(name);
        }

        x("hi");


21. Implement Interface in class
 
 Ex:
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
                        return `${this.id} is now registered`   ----> can't return anything other than a string since 
                                                                the function is declared a return as string in interface
                }
        }

        const pperson = new Person(4, "Din");
        console.log(pperson.register())


        <!-- Add an inheritance class here -->

        class Exemployee extends Person {
                position: string;

                constructor (id: number, name: string, position: string) {
                        super(id, name);
                        this.position = position;
                }

        }

        const exe = new Exemployee(100, "gg", "dev");

        console.log(exe.register())


22. Generics 

 ** To prevent passing variables of any types

  Ex:   function getArray(items: any[]): any[] {
                return new Array().concat(items)
        }

        let a = getArray([1,2,3])
        let b = getArray(["a", "b"])

        console.log(b)

        a.push("hi")  ----- > Here, even though the array consists of numbers, we can easily push strings or any type of 
                              variables since the function itself ask for "any" type
        console.log(a)

        *******
        <!-- To overcome this, Generics are used -->
        *******

        function getArray<T>(items: T[]): T[] {
                return new Array().concat(items)
        }

        let a = getArray<number>([1,2,3])
        let b = getArray<string>(["a", "b"])

        console.log(b)

        a.push("hi")  ----- > You can't do this anymore
        console.log(a)