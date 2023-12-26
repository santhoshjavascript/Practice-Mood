// Call by Values Types

let first_Name = "Santhosh"; // Address : 001
let copy_Name = first_Name; // Address: 001

console.log(first_Name);
console.log(copy_Name);

// ITS updating Memorey Address and String Updating

first_Name = "Changed "; // Address : 002

console.log(first_Name);
console.log(copy_Name);

// Call By Rferance Type

const my_Name = {
  name: "Hello World",
};

const coped_Name = my_Name;
coped_Name.name = "Hell To Come";

console.log(coped_Name);
console.log(my_Name);
