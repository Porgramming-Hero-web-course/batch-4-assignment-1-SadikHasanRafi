// Sample Input:


type PPerson = {
    name:string;
    age:number;
}


const getProperty = (property:PPerson, key : keyof Person):string|number => {
    return property[key]
}


const pperson = { name: "Alice", age: 30 };


console.log(getProperty(pperson, "name"));

