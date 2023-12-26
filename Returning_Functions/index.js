// Returning Functions with Tradintional Ways

const function_Expression = function (parent) {
  return function (child) {
    console.log(`im parnt ${parent} and im child ${child}`);
  };
};

const storing = function_Expression("hello");

storing("World");

// Returning Functions with using of arrow Functions

const arrow = (parnt) => (child) =>
  console.log(`hello ${parnt} and here ${child}`);
arrow("saanthosh")("ajay");
