function Animal(name) {
  // Initialize name property
  this.name = name;
}

// Define makeSound method on Animal's prototype
Animal.prototype.makeSound = function () {
  return `Some generic sound`;
};

const animal = new Animal("Dog");
console.log(animal.makeSound());
