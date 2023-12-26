// Higher Order Function

const upperCase = (word) => {
  return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
};

const lowerCase = (word) => {
  return word.replace(word.charAt(0), word.charAt(0).toLowerCase());
};

 //   here this one was Higher Oredr Function

const high_Order = (strings, fn) => {
  fn(strings);
};

console.log(upperCase("santhosh"));
console.log(lowerCase("SANTHOSH"));
