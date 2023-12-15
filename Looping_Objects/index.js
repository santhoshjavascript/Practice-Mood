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

// Object Its not iterable Object.entries its return array
for (const looping of Object.entries(restaurant)) console.log(looping);

//access Index and  Values Old Ways

const [, categories] = Object.entries(restaurant);
console.log(
  `access key value in first Index  ${categories[0]} Getting all value in Secound Index ${categories[1]}`
);

// const [, ever] = Object.entries(restaurant);
// console.log(Object.keys(ever));
// console.log(Object.values(ever));
// console.log(ever);

// access index and values Modern Ways

const { openingHours } = restaurant;

// Keys: thu,fri,sat, Values: [object Object],[object Object],[object Object] something Problem
console.log(
  `Keys: ${Object.keys(openingHours)}, Values: ${Object.values(openingHours)}`
);

// fixing Now nested objects
Object.values(openingHours).forEach((loop) => console.log(loop));
