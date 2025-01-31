//creating an object using an object initializer
// const obj = {property1: value1, 2: value2, "property n": value3,}
// To define an object type, create a function for the object type that
//  specifies its name, properties, and methods.

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year
}
//Now you can create an object called myCar as follows:
const myCar = new Car('Eagle', 'Talon', 1963);

//using object.create() method example
const Animal = {
    type: 'Invertebrates',
    displayType() {
        console.log(this.type)
    }
};

// Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType()

const fish = Object.create(Animal);
fish.type = 'fishes';
fish.displayType()

// prototype chain

const myObj = {
    city: 'Madrid',
    greetings() {
        console.log(`Greetings from ${this.city}`)
    }
};
myObj.greetings()

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`)
    },
    introduceSelf: function () {
        console.log(`Hi! I am ${this.name[0]}`)
    }

}

person.bio();
person.introduceSelf();