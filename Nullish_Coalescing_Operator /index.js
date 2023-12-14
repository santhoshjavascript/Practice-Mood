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

// Using ternary operator adding extra keys in object

const adding = restaurant.world ? restaurant.world : "santhosh";
console.log(adding);

// Using || operator adding extra keys in object

const using_Or = restaurant.world || "Santhosh";
console.log(using_Or);

// Facing 0 Number Problem
//Here Everthing Working Perfect but i dont want that if is it 0 show me 0 number

const students_Count = 0;
console.log(students_Count || "Its False");
console.log(students_Count ? students_Count : "False Value ");

// lets doing Nullish_Coalescing_Operator
console.log(students_Count ?? "Nullish Says False Value ");
