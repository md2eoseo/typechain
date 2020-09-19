interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Won",
  gender: "female",
  age: 21,
};

const sayHi = (person: Human): string => {
  return `Hello my name is ${person.name}, im ${person.age} years old, ${person.gender}`;
};

console.log(sayHi(person));

export {};
