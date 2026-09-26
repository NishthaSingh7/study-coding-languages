// unknown type - Type Safety is enforced
// unknown is the safer alternative to any

let data: unknown;

data = "Hello World";
console.log(data);

//data = 123;
console.log(data);

// data1 = data.toUpperCase();

if (typeof data === "string"){
    console.log(data.toUpperCase());
}

//   any
//    ↓
// "Trust me"

//  unknown
//     ↓
// "Prove it first"