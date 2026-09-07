// objects

//instead of this:
const user = {
    name: "Nishtha",
    age: 20,
}

// you can define the expected struc
const user1: {
    name: string;
    age: number;
} = {
    name: "Rahul",
    age:21
};

// But repeating object shapes isn't ideal.
// That's where **type aliases and interfaces** come in.

console.log(user);
console.log(user1);