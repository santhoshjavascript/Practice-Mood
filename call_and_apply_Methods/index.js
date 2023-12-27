// Manupulating This Key Word

const santhosh_Marks = {
  tamil: 100,
  english: 78,
  exam: "pass",

  function(name, date_of_birth) {
    console.log(
      `${name} and ${date_of_birth} you are in exam ${this.exam} and you are score in TAMIL ${this.tamil} and ENGLISH ${this.english}`
    );
  },
};

santhosh_Marks.function("santhosh", 2002);

const chinnakaruppan_Marks = {
  tamil: 98,
  english: 87,
  exam: "Pass",
};

// Normal function This key given Output Undefind

const getting_Object = santhosh_Marks.function;
getting_Object("chinnakaruppan", 2003);

// Solving The Problem Solution 1

getting_Object.call(chinnakaruppan_Marks, "chinna", 2009);

// Solving The Problem Solution 2

getting_Object.apply(santhosh_Marks, ["Ajay", 2005]);

// bind Method its Return a new fn

const storeing_Returned_Fn = getting_Object.bind(chinnakaruppan_Marks);
storeing_Returned_Fn("Takamitzi", 2000);

// bind Method Setting Defult Parametter

const setting_Up = getting_Object.bind(chinnakaruppan_Marks, "Same Name");
setting_Up(2001);
setting_Up(1999);

// Task Caluculator Application Using Returning Function We cant to in bind

const calu = (input, Value) => {
  let adding = input + Value;
  console.log(adding);
};

const add = calu.bind(null, 9);
add(); // 10
add(); // 10
add(); // 10

// Task With Fixed Parametter

const adding = calu.bind(null, 10, 30);
adding(1); // 10
adding(10); // 20
adding(); // 40
