// Sample Input:

{



    type Person = {
        name:string;
        age:number;
    }
    
    
    const getProperty = (property:Person, key : keyof Person):string|number => {
        return property[key]
    }
    
    
    const person = { name: "Alice", age: 30 };
    
    
    console.log(getProperty(person, "name"));
    
 
    
}