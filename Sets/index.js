//When ever you dont want to dublicate array , object , string what evevr data types means we will use it set Object

const dublicate_Array = [" santhosh", "ajay", "vijaya", "murugesan", " ajay"];

const dublicate_string = " santhosh santhosh ";

const dublicate_Object = {
  storing: ["hello", "world", "welcome", "hello"],
};

// Now going to use in Set Object using with in arrays

const trimed_Array = [];

dublicate_Array.forEach((item) => trimed_Array.push(item.trim()));
console.log(trimed_Array);

const deleting_Dublicate = new Set(trimed_Array);
console.log(deleting_Dublicate);

// try it out with Object

const deleting_Dublicate_Object = new Set(dublicate_Object.storing);
console.log(deleting_Dublicate_Object);

// when u want to use this one means u dont want to dublicate Entries mean that time u can use it all
