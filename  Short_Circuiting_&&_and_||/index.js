//Normal Condition Working Like True or False

const here = "Hello World ";
if (here) console.log("Yes Its True");
else console.log("Not Yet ");

//Short Circutting &&

console.log(10 && "santhosh"); // santhosh
console.log(false && "Santhosh"); // false
console.log(undefined && "Santhosh"); // undefined
console.log(null && "Santhosh"); // null

//Short Circutting && using with if condition

if (true && " santhosh" && 10 && "ajay") console.log("Everything Will Be true");
else console.log("Not Some will False");

//Short Circutting ||

console.log(null || "Santhosh"); // Santhosh
console.log(undefined || "Santhosh"); // Santhosh
console.log(false || "Santhodh"); // Santhodh
console.log(false || undefined); // undefined
console.log(false || null); // null
console.log(0 || null); //

//Short Circutting || using with if condition

if (undefined || null || false || "Santhosh") console.log("Some One True ");
else console.log("Everthing False Value");

let value = 0;

value ? 10 : value;
