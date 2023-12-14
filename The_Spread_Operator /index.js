const restaurant = {
  name: "Classico Italiano",

  location: "Via Angelo Tavanti 23, Firenze, Italy",

  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],

  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],

  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Adding Two arrays with one Element
const single_Array = [...restaurant.categories, ...restaurant.starterMenu];
console.log(`Im a single type of array ${single_Array}`);

// Spreed operator using with strings also
const using_String = "SanthoshCharli";
console.log(`${using_String} Now going to spreed `, ...using_String);

// Spreed operator using to object also
const { categories, starterMenu } = restaurant;
console.log(...categories, ...starterMenu);

// merging two object
const my_Name = {
  name: "charli",
};

const merged_Object = { ...restaurant, ...my_Name };
console.log(merged_Object);

// Best example of spreed operator
const spread_Operator = (name, age, job) => {
  return console.log(
    `My name is ${name} and my age is ${age} and im doing job ${job}`
  );
};

let info = [
  prompt("Whats your name: "),
  prompt("Whats your age: "),
  prompt("Whats your job : "),
];

spread_Operator(...info);
