interface Profile {
    name: string;
    age: number;
    email: string;
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

const updateProfile =  (profile : Profile, updateProperty: Partial<Profile>  ) => {

    for (let key in updateProperty) {
        if (updateProperty.hasOwnProperty(key)) {
            profile[key] = updateProperty[key];
        }
    }

    return profile
}

console.log(updateProfile(myProfile, { age: 26 }));
