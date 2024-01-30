/**
 * class called 'User'
 * Constructor take 2 parameters - first & last 
 */
class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
}

// User - class
// "Jon", "Snow" are the parameters passed to the constructor
// user1 - object
const user1 = new User("Jon", "Snow")
console.log('user1', user1);
console.log(user1.firstName, user1.lastName);

const user2 = new User("Ned", "Stark");
console.log('user2', user2);
console.log(user2.firstName, user2.lastName);

class Person {
  constructor(name) {
    this.firstName = name;
  }
}

// 'new' keyword followed by the class name 'Person'
// 'Sebin' is passed as a parameter to the constructor
const sebin = new Person("Sebin");
console.log(sebin.firstName);

class PersonWithIntro {
  constructor(name) {
    this.firstName = name;
  }
  introduce() {
    console.log(`Hi, I am ${this.firstName}`);
  }
}

// 'new' keyword followed by the class name 'Person'
// 'Sebin' is passed as a parameter to the constructor
const sebin2 = new PersonWithIntro("Sebin");
console.log(sebin2.firstName);
sebin2.introduce(); // Hi, I am Sebin

/**
 * Create a Vehicle class with the following properties
  Model
  Manufacturer
  Year of Manufacturing
  Color
  No of wheels
…
  Add a constructor method to initialize all the values
  Add a method to print the property values.
  Using the new keyword, create a few instances (objects) and run the method to print its properties.
 */

class Vehicle {
  constructor(model, manufacturer, year, color, wheels) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.color = color;
    this.wheels = wheels;
  }
  printProperties() {
    console.log(`Model: ${this.model}`);
    console.log(`Manufacturer: ${this.manufacturer}`);
    console.log(`Year: ${this.year}`);
    console.log(`Color: ${this.color}`);
    console.log(`Wheels: ${this.wheels}`);
  }
}

const tesla = new Vehicle("Model 3", "Tesla", 2020, "Red", 4);
tesla.printProperties();

const bmw = new Vehicle("X5", "BMW", 2019, "Black", 4);