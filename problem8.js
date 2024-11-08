function validateKeys(object, key) {
    for (var i = 0; i < key.length; i++) {
        if ((key[i] in object)) {
        }
        else {
            return false;
        }
    }
    return true;
}
var person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
