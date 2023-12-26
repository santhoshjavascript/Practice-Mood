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

const {
  thu: { openn, closee },
} = restaurant.openingHours;

// Its Like Map Object View
const [, [fri, { open, close }]] = Object.entries(restaurant.openingHours);
console.log(fri, open, close);

//array va Map vanthu Object Aha Convert Pannum
const firstAttempt = new Map([
  ["question", "which programing lanuage you like"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["coorect", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

for (const [index, values] of firstAttempt) {
  if (typeof index === "number") {
    console.log(`Here you are only we Want ${values}`);
  }
}

// key Boolen aha erukkum pothu athu out put pakka

console.log(firstAttempt.get(firstAttempt.get("coorect") === 3));

