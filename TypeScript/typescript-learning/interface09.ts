// Interface
interface User {
   name: string  
}
// interface extension
interface User {
    age: number
}
// interface extension
interface User{
    role: Role
}

// type union is not allowed in interface
type Role = "admin" | "user" | "guest"
type Hungry = "yes" | "no" | "maybe"
type Both = Role | Hungry
// type unions only manage single type not multiple types



// here we are using interface to assign a value to the variable
const user1: User = { name: "Nishtha", age: 25, role: "admin" };

// here we are using type union to assign a value to the variable
const user2: Both = "no";
//const role: Role = "admin"

console.log(user1)
console.log(user2)