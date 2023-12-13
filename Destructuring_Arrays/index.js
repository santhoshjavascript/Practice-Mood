// we have object that object inside haved on a  methods,object , array there
const restaurant = {
  name: "Classico Italiano",

  location: "Via Angelo Tavanti 23, Firenze, Italy",

  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],

  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],

  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orders: function (starterMenuIndex, mainMenuIndex) {
    return [
      `This was a startMenu List  ${this.categories[starterMenuIndex]} And then Thos All was a ${this.starterMenu[mainMenuIndex]}`,
    ];
  },

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

// Destructing array
const [firstIndex, secoundIndex, thirdIndex] = restaurant.categories;
console.log(firstIndex, secoundIndex, thirdIndex);

//Nessted array Destructing
const [, secoundElemnt, [thirdOne, thirdTwo]] = [
  "santhosh",
  "ajay",
  ["murugesan", "vijaya"],
];
console.log(secoundElemnt, thirdOne, thirdTwo);

// Function with Destructing
const [firstOne, ...anotherThing] = restaurant.orders(1, 2);
console.log(firstOne, anotherThing);

//Swabing with easy way to do Destructing
let [food, anotherFood] = restaurant.mainMenu;
console.log(food, anotherFood);

//[] = > dont thing ist that thing like everthing varaiable
[anotherFood, food] = [food, anotherFood];
console.log(food, anotherFood);
