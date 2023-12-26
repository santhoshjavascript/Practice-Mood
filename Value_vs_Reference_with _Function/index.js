// see all concept in call by value and call by ref

const variable_Name = "Santhosh";

const object_Name = {
  country: "India",
};

const play_Function = (variable, object_Variable) => {
  console.log(variable); // Its hold variable_Name mem address 
  variable = " Hello World"; // Now its have own mem address
  console.log(variable);
  console.log((object_Variable.country = "Leaf Village"));
};

play_Function(variable_Name, object_Name);

console.log(variable_Name);
console.log(object_Name);
