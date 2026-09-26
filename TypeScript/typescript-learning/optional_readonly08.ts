type User = {
    readonly name: string, // readonly property
    age?:  number, // optional property
    isDev: boolean
}

const user1: User = {name: "Riya", age: 20, isDev: true}
const user2: User = {name: "Jogi", isDev: true}

// user.name = "John" // error because name is readonly
console.log(user1)
console.log(user2)