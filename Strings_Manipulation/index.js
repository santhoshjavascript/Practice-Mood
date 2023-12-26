const string_Variable = "Santhosh Hello Santhosh world Santhosh ";
console.log(string_Variable.indexOf("S"));
console.log(string_Variable.lastIndexOf("S"));
console.log(
  string_Variable.slice(
    string_Variable.indexOf("Hello"),
    string_Variable.lastIndexOf("world")
  )
);

console.log(string_Variable.slice(0, -1));

// SLICE TASK WITH USING INDEXOF

const upperMood = (userNmae) => {
  return userNmae.replace(userNmae[0], userNmae[0].toUpperCase());
};

console.log(upperMood("santhosh"));
console.log(upperMood("mikey"));
console.log(upperMood("kavinesh"));
console.log(string_Variable);
console.log(string_Variable.trim());
console.log(string_Variable.replace("Santhosh", "Hacker"));
console.log(string_Variable.replaceAll("Santhosh", " Hacker"));
console.log(string_Variable.includes("Santhosh"));
console.log(string_Variable.split(" "));

const items = ["apple", "orange", "bannana"];
console.log(items.join(" "));
