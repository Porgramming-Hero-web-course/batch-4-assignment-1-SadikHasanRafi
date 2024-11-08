var myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
var updateProfile = function (profile, updateProperty) {
    for (var key in updateProperty) {
        if (updateProperty.hasOwnProperty(key)) {
            profile[key] = updateProperty[key];
        }
    }
    return profile;
};
console.log(updateProfile(myProfile, { age: 26 }));
