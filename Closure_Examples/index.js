//  Closure Examples 1 Function Returning

// This function Run on Caall Stack Own Time Of periode
const returned_Function = () => {
  let varaiable = 10;

  return () => {
    varaiable++;
    console.log(varaiable);
  };
};

const saved = returned_Function();
// This Function Runing in Call Stack Own time of periode it can access Varaible in Retuned_Function bcz of Closer
saved();
saved();
saved();

console.dir(saved);

// Closure Examples 2 WithOut Function Returning

let waiting;

const without_Returning = () => {
  let first_Name = "Santhosh";
  console.log(first_Name);
  waiting = () => {
    first_Name = "Charli";
    console.log(first_Name);
  };
};

without_Returning();
waiting();
waiting();

console.dir(waiting);

// Not Closer To Do This

let global = 0;

const hello = () => {
  return global++;
};

console.log(hello());
console.log(hello());
console.log(hello());
console.dir(hello);
