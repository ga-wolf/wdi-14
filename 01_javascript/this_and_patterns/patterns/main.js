/////////////////////
// Factory Pattern //
/////////////////////


var AnimalFactory = function () {
  var animal = {};
  animal.alive = true;
  animal.breathing = function () {
    console.log( "In through the snout, out through the mouth" );
  };
  return animal;
};

var DogFactory = function ( name, breed ) {
  var dog = AnimalFactory();

  dog.name = name;
  dog.breed = breed;
  dog.bark = function () {
    console.log( "Woof" );
  };

  return dog;
};

var tammy = DogFactory( "Tammy", "Tamaskan" );
var buddy = DogFactory( "Buddy", "Labrador" );


var PersonFactory = function ( name, age ) {
  var person = {};

  person.name = name;
  person.age = age;
  person.speak = function () {
    console.log( "Hi!" );
  };

  return person;
};

var alexander = PersonFactory( "Alexander Sokurov", 22 );


/////////////////
// Constructor //
/////////////////


var Koifish = function ( name, color, alive ) { // But really Coyfish
  this.name = name;
  this.color = color;
  this.alive = alive;
  this.isCreepy = function () {
    console.log( "Definitely" );
  };
  return this;
};

var goldy = new Koifish( "Goldy", "gold", true );


////////////////////////////////////////////
// OLOO - Objects linked to other objects //
////////////////////////////////////////////


var Animal = { // A generic animal
  living: true,
  die: function () {
    console.log( "I am now dead" );
  }
};

var Wolf = Object.create( Animal ); // A generic wolf
Wolf.howl = function () {
  console.log( "Extremely cute when pup" );
};

// A specific wolf
var tamaskan = Object.create( Wolf );
tamaskan.breed = "Tamaskan";
