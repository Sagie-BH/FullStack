// Summary: JavaScript Classes vs. Functions

// JavaScript Classes and Functions are two different ways of defining and creating reusable code in JavaScript.
// While both can be used to create objects and implement object-oriented concepts, they have some key differences.

// Example 1: Creating a Class
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person("John", 30);
  person1.greet(); // Output: Hello, my name is John, and I am 30 years old.
  
  /*
  Explanation:
  In Example 1, we define a class "Person" using the class syntax.
  The class has a constructor method, which is called when an object of the class is created using the "new" keyword.
  The constructor initializes the "name" and "age" properties of the object using the provided arguments.
  The class also has a "greet" method, which logs a greeting message to the console, including the "name" and "age" properties.
  We create a new object "person1" from the "Person" class and call the "greet" method to display the greeting message.
  */
  
  // Example 2: Creating a Function Constructor
  function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.greet = function() {
      console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
    };
  }
  
  const person2 = new Person("Alice", 25);
  person2.greet(); // Output: Hello, my name is Alice, and I am 25 years old.
  
  /*
  Explanation:
  In Example 2, we create a function constructor named "Person."
  The function constructor is similar to a class constructor, but it uses the "this" keyword to create and set properties on the object.
  We define the "name" and "age" properties and a "greet" method using the "this" keyword.
  To create a new object from the function constructor, we use the "new" keyword and call the function with the required arguments.
  The resulting object "person2" has the "greet" method to log the greeting message.
  */
  
  // Example 3: Class Inheritance
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  
    study() {
      console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
  }
  
  const student1 = new Student("Eva", 15, 10);
  student1.greet(); // Output: Hello, my name is Eva, and I am 15 years old.
  student1.study(); // Output: Eva is studying in grade 10.
  
  /*
  Explanation:
  In Example 3, we demonstrate class inheritance using the "extends" keyword.
  The class "Student" extends the "Person" class, which means "Student" inherits the properties and methods of "Person."
  We use the "super" keyword inside the constructor of "Student" to call the constructor of the parent class "Person."
  The "study" method is specific to the "Student" class and is not present in the parent "Person" class.
  We create a new object "student1" from the "Student" class and call both the "greet" and "study" methods to display relevant information.
  */
  
  // Example 4: Prototypal Inheritance (Using Functions)
  function Animal(species) {
    this.species = species;
  }
  
  Animal.prototype.sound = function() {
    console.log("Animal makes a sound.");
  };
  
  function Dog(species, breed) {
    Animal.call(this, species);
    this.breed = breed;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.sound = function() {
    console.log("Dog barks.");
  };
  
  const dog1 = new Dog("Canine", "Labrador");
  dog1.sound(); // Output: Dog barks.
  
  /*
  Explanation:
  In Example 4, we demonstrate prototypal inheritance using functions.
  We have an "Animal" constructor function that sets the "species" property and has a "sound" method.
  To create a "Dog" constructor, we use the "call" method inside the "Dog" function to invoke the "Animal" function and set the "species" property.
  Then, we use "Object.create" to establish a prototypal inheritance chain between "Animal.prototype" and "Dog.prototype."
  The "Dog" prototype inherits the "sound" method from the "Animal" prototype but overrides it with its own implementation.
  We create a new object "dog1" from the "Dog" constructor and call the "sound" method, which displays "Dog barks."
  */
  
  // End of Summary
  