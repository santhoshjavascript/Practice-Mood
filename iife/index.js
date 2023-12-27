//  Immediately Invoked Function Expressions (IIFE)

// Normal Function Expression

const expression = () => {
  console.log("Im Calling Again And Again ");
};

expression();
expression();

// Immediately Invoked Function Expressions

(function () {
  console.log("Im Runs Once Only ");
})();

// Immediately Invoked Function Expressions (IIFE) Using With Arrow Function

(() => {
  console.log("I too Run Once Only Here We Go ");
})();
