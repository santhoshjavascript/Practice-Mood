const realtives = {
  over_all: ["Velraj", " kanasan", " murugesan", " chithra", " santhi"],
};

// Normal Object Has Some Problem Go To Check It Out
const children = {};
children[realtives] = ["storing object as a key in other object"];
console.log(children);

// Solve Problem
const map_Method = new Map();

map_Method.set(realtives, ["santhosh", "thrani", "nanthini", "dhurgesh"]);

if (map_Method.has(realtives)) {
  const map_Method_Values = map_Method.get(realtives);
  if (map_Method_Values.includes("santhosh")) {
    console.log("Yup santhosh Here");
  } else {
    console.log("Sorry santhosh Not there");
  }
} else {
  console.log("Map Not Contained Realtives Key");
}
