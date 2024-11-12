# The significance of union and intersection types in Typescript.


TypeScript comes with extra features on top of JavaScript, with a primary focus on type safety.

## Union Types

In TypeScript, a common use case for type safety arises when a variable needs to store different types of values. For example, a variable might need to hold either a string or a number. In JavaScript, you would simply assign a value to that variable. However, TypeScript requires you to define the type explicitly. 

To handle scenarios where a value can be either a string or a number, you can use the pipe (`|`) operator to define union types. Here's an example:

```typescript
let value: string | number;

value = 12; // true
value = "test"; // true
value = true; // false
```

Here in the last use case scenario we are trying to store boolean values but as previous we declare the value type as string or number it will not store the boolean type value 'true' or 'false'. But as union types in the value variable can handle both string or number type values. 


## Intersection Types

In TypeScript, sometimes you may want a variable to hold multiple types simultaneously. For instance, you might need a value that should be treated as both an object with certain properties and another object with additional properties. And this is the place when you need intersection type. This allows to combine multiple types into one. A variable defined with an intersection type must satisfy all the conditions of the types combined.

```typescript
type Person = { name: string; age: number };
type Worker = { jobTitle: string };

type Employee = Person & Worker;

let employee: Employee = {
  name: "John",       // must have name from Person
  age: 30,            // must have age from Person
  jobTitle: "Engineer" // must have jobTitle from Worker
};
```

Here to work with two types: Person and Worker. A Person has a name and age, while a Worker has a jobTitle. If you want to create a new type Employee that has all the properties of both Person and Worker, you can use an intersection type.

