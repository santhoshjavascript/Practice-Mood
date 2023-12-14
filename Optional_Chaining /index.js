const friends = {
  normal_Friends: ["Chinnakaruppan", "vikram", "kavinesh ", "chiran"],
};

// using normal condition

if (friends && friends.closeFriend) {
  for (const [index, value] of friends.normal_Friends.entries())
    console.log(index + 1, value);
} else {
  friends.closeFriend = ["mySelf", "MyFamily"];
  console.log(friends);
}

// using ternary operator

const using_Ternary = friends.closeList
  ? friends.closeList
  : ["Santhosh ", "Myself"];

console.log(using_Ternary);

// Optional Chainning Real Hero Of Condition ?. Optional chainnig ?? Nullish Operator But its not add  existing Object

const optional_Chain = friends?.closeList ?? console.log(`Its add temp `);
console.log(optional_Chain);
console.log(friends);
