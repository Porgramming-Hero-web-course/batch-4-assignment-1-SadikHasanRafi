

type Person = {
    name:string;
    age:number;
    email:string;
}


function validateKeys<T extends Person>( object: T  , key: (keyof T)[]) : boolean{

    let flag : boolean = false;


    for (let i = 0; i < key.length; i++) {
        if ( !(key[i] in object ) ) {
            return false
        }
    }
    return true;


}


const person = { name: "Alice", age: 25, email: "alice@example.com" };

console.log(validateKeys(person, ["name", "age" ]));