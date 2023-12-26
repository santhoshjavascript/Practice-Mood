//Normal object method  we cant set key as object and array like  Thats why we are  moveing to the  Map Object
//Another Benifit Map Object Avoid Dublicate Entires Also
//TASK Object aha key aha Object ku Pass pannaum

const subject = {
  list: ["tamil", "english", "math", "secince", "socialScience", "tamil"],
};

console.log(subject);

// when you use an object as a key in another object (like fail_Subject[subject]), the object will be implicitly converted to a string.when you use an object as a key in another object (like fail_Subject[subject]), the object will be implicitly converted to a string.
//so this was a problem About Object

const fail_Subject = {};
fail_Subject[subject] = ["tamil", "math"];

console.log(Object.keys(fail_Subject));

// Lets Solve That Problem

const using_Map = new Map();

using_Map.set(subject, ["hello", "world", "apple", "orange"]);

if (using_Map.has(subject)) {
  const getting_Key_Values = using_Map.get(subject);
  if (getting_Key_Values.includes("hello")) console.log("im done yet");
  else console.log("im not done yet");
}

console.log(using_Map.get(subject));
console.log(using_Map.keys(subject));
