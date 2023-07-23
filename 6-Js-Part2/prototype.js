// Summary: Prototypes in JavaScript

// Prototypes are a fundamental concept in JavaScript's object-oriented programming model.
// Every object in JavaScript has a prototype, which serves as a blueprint for the object and provides inheritance.

// Example 1: Creating a Prototype
const animalPrototype = {
    sound: function() {
      console.log("Animal makes a sound.");
    },
  };
  
  const dog = Object.create(animalPrototype);
  dog.breed = "Labrador";
  
  dog.sound(); // Output: Animal makes a sound.
  
  /*
  Explanation:
  In Example 1, we create a prototype called "animalPrototype" that contains a "sound" method.
  The "sound" method is a function that logs "Animal makes a sound." to the console.
  We create a new object "dog" using "Object.create(animalPrototype)" to set "animalPrototype" as the prototype of "dog."
  The "dog" object inherits the "sound" method from its prototype, and when we call "dog.sound()", it executes the method.
  */
  
  // Example 2: Modifying Prototype Properties
  const personPrototype = {
    greeting: "Hello",
    greet: function() {
      console.log(`${this.greeting}, my name is ${this.name}.`);
    },
  };
  
  const person1 = Object.create(personPrototype);
  person1.name = "John";
  
  const person2 = Object.create(personPrototype);
  person2.name = "Alice";
  person2.greeting = "Hi";
  
  person1.greet(); // Output: Hello, my name is John.
  person2.greet(); // Output: Hi, my name is Alice.
  
  /*
  Explanation:
  In Example 2, we create a prototype called "personPrototype" that contains a "greeting" property and a "greet" method.
  Both "person1" and "person2" objects are created from "personPrototype" using "Object.create(personPrototype)."
  "person1" sets its "name" property to "John," and "person2" sets its "name" property to "Alice" and "greeting" property to "Hi."
  When we call the "greet" method on each object, it logs the greeting message with the corresponding name and greeting property.
  */
  
  // Example 3: Prototype Chain
  const mammalPrototype = {
    isMammal: true,
  };
  
  const dogPrototype = Object.create(mammalPrototype);
  dogPrototype.sound = function() {
    console.log("Dog barks.");
  };
  
  const labrador = Object.create(dogPrototype);
  labrador.breed = "Labrador";
  
  console.log(labrador.isMammal); // Output: true
  labrador.sound(); // Output: Dog barks.
  
  /*
  Explanation:
  In Example 3, we create multiple prototypes in a chain: "mammalPrototype," "dogPrototype," and "labrador."
  "mammalPrototype" has a property "isMammal" set to true.
  "dogPrototype" is created from "mammalPrototype" and adds a "sound" method to represent the barking behavior of a dog.
  "labrador" is created from "dogPrototype" and has an additional property "breed" set to "Labrador."
  When we access properties or methods on "labrador," JavaScript looks up the prototype chain to find the property or method in its prototypes.
  This way, "labrador" inherits the "isMammal" property and "sound" method from its prototypes.
  */
  
  // End of Summary
  