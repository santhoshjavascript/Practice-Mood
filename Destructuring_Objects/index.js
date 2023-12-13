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

//Rules if u want destructing object use same name Destructing Object ;

const { name, categories, ...others } = restaurant;
console.log(name, categories, others);

//Nessted Object doing Destructing

console.log(restaurant.openingHours);
const {
  thu: { open, close },
} = restaurant.openingHours;
console.log(open, close);

//Setting Defult Variable

const {
  santhosh = "This one is not there in object",
  mainMenu = "Its not there in object",
} = restaurant;
console.log(santhosh, mainMenu);

//mutataing variable

let apple = 10;
let orange = 20;

const fruits = {
  apple: 100,
  orange: 200,
  binabble: 300,
};

// This one is Notable point Here
({ apple, orange } = fruits);
console.log(apple, orange);
