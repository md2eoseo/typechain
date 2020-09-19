class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const sister = new Human("Won", 21, "female");

const sayHi = (person: Human): string => {
  return `Hello my name is ${person.name}, im ${person.age} years old, ${person.gender}`;
};

console.log(sayHi(sister));

export {};
