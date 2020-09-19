const name = "Tae",
  age = 25,
  gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello my name is ${name}, im ${age} years old, ${gender}`);
};

sayHi(name, age);

export {};
