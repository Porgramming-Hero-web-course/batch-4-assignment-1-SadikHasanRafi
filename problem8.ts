

function validateKeys<T>( object: T  , key: (keyof T)[]) : boolean{


    for (let i = 0; i < key.length; i++) {
        if (! ( key[i] in object  )) {
            return false
        }
    }

    return true
}


const person = { name: "Alice", age: 25, email: "alice@example.com" };

console.log(validateKeys(person, ["name", "age"]));