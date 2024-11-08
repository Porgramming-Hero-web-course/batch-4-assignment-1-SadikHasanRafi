function validateKeys(object, key) {
    var flag = false;
    for (var i = 0; i < key.length; i++) {
        if (!(key[i] in object)) {
            return false;
        }
    }
    return true;
}
var person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
