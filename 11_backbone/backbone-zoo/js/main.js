// class Movie ... end
  // Blueprint
var Movie = Backbone.Model.extend({
  // That will be changed if necessary
  defaults: {
    name: "N/A",
    director: "N/A",
    plot: "N/A",
    duration: "N/A",
    rating: 1
  },

  // Every time a new Movie is created - ` new Movie() `
  initialize: function () {
    // Attach event handlers to the instance - the particular movie
    // If there is any change at all
      // .set
    this.on( "change", function () {
      console.log( "Something changed" );
    });

    // If there is a change to the name attribute, call this function
    this.on( "change:name", function () {
      // Previous attribues, where it was before the change
      var changedAttributes = this.previousAttributes();
      // Current attributes
      var currentAttributes = this.toJSON();

      console.log( "Name was changed from: " + changedAttributes.name );
      console.log( "Name was changed to: " + this.get("name") );
    });
  }
});

var Movies = Backbone.Collection.extend({
  model: Movie,
  initialize: function () {
    console.log("New movies collection created");
  }
});

var genericMovie = new Movie();
var newMovie = new Movie({
  name: "Satantango",
  duration: 450,
  director: "Bela Tarr"
});
var specificMovie = new Movie({ name: "Satan" });

var movies = new Movies(); // It is an empty collection
movies.add({
  name: "Finding Nemo"
});
// console.log( movies.length );

var aCollectionOfOne = new Movies( genericMovie ); // A collection of one
var aCollectionOfThree = new Movies([
  specificMovie,
  newMovie,
  { name: "B@d B0y$ 2" }
]); // A collection of three

var movieOne = {
  name: "Movie one",
  rating: 2
};
var movieTwo = {
  name: "Movie two",
  rating: 3
};
var movieThree = {
  name: "Movie three",
  rating: 3
};

movies.add( [ movieOne, movieTwo, movieThree ] );

var ratingOfThree = movies.where({
  rating: 3
});
var ratingOverThree = movies.filter(function (movie) {
  return movie.get("rating") >= 3;
});
var sortedByRating = movies.sortBy( "rating" );



// var specificMovie = new Movie({ name: "Satan" });
// console.log( genericMovie.toJSON(), specificMovie.toJSON() );
//
// // movie = Movie.new
// var newMovie = new Movie({
//   name: "Satantango",
//   duration: 450,
//   director: "Bela Tarr"
// });
// var movieName = newMovie.get("name");
//
// var anotherMovie = new Movie({
//   name: "Toy Story 3"
// });
// anotherMovie.set("spaceShip", 42);
// anotherMovie.set({
//   type: "animated",
//   madeBy: "Pixar"
// });
// console.log( anotherMovie.toJSON() );


var Animal = Backbone.Model.extend({
  // Default values, initialize methods, event handlers
  defaults: {
    type: 'animal',
    ecosystem: "",
    stripes: 0,
    living: true
  },
  initialize: function () {
    var animal = this;
    animal.on("change", function () {
      // console.log( "Something just changed" );
    });

    // .set("type", "something") will trigger this function
    animal.on("change:type", function () {
      // console.log( "The type just changed" );
    });
  }
});
// var genericAnimal = new Animal();
// console.log( genericAnimal.toJSON() );

var kangaroo = new Animal();
var living = kangaroo.get("living");
// console.log( living );

kangaroo.set("type", "Kangaroo");
kangaroo.set({
  pouch: true,
  tail: true
});

kangaroo.set("type", "Giant Kangaroo");

var kangarooAttrs = kangaroo.toJSON();
console.log( kangarooAttrs );

var butterfly = new Animal({
  type: "Monarch"
});

var badger = new Animal({
  type: "Badger"
});

var panda = new Animal({
  type: "Panda",
  living: false,
  id: 10
});

// Backbone.Model.extend() will create a new blueprint
// new Movie() will create a new instance
// .get() is the way to access information
// .set() is the way to set information and this will fire the event handlers
// this.on("change", function () {})

var Zoo = Backbone.Collection.extend({
  model: Animal,

  initialize: function () {
    console.log("A new zoo was created");
    this.on("add", function (animal) {
      console.log("We just got a new animal, hopefully it isn't Donald");
    });
    this.on("remove", function () {
      console.log("Hopefully it was Donald");
    });
  }
});

var zoo = new Zoo([ kangaroo, badger, butterfly ]);
zoo.add( panda );
zoo.add({
  type: "Blobfish",
  living: false
});


console.log( zoo.length );

var deadAnimals = zoo.where({ living: false });
zoo.remove( deadAnimals );

console.log( zoo.length );

var donaldTrump = new Animal({
  type: "moron"
});
zoo.add( donaldTrump );
zoo.remove( donaldTrump );

var donaldTrumps = zoo.where({ type: "moron" });
console.log( donaldTrumps.length );

var remainingAnimals = zoo.pluck("type");
console.log( remainingAnimals );

var Car = Backbone.Model.extend({
  defaults: {
    wheels: 4,
    steeringWheel: true
  },
  initialize: function () {
    console.log("new car created");
  }
});
var jag = new Car({
  year: 1964,
  type: "E-type"
});
var galaxy = new Car({
  year: 1962,
  type: "Ford Galaxy"
});

var Dealership = Backbone.Collection.extend({
  // model, initialize, event handlers
  model: Car,

  initialize: function () {
    console.log("A new dealership opened, how exciting");
    this.on("add", function ( car ) {
      console.log( "We just received a new car, go sell it." );
      console.log( car.toJSON() );
    });
    this.on("remove", function ( car ) {
      console.log( "A car was sold or stolen" );
    });
  }
});
var dealership = new Dealership([ jag, galaxy ]);
dealership.add({
  year: 1965,
  type: "XP"
});
console.log( dealership.length );

var sortedByYear = dealership.sortBy( "year" ); // Array back
console.log( sortedByYear );

dealership.each(function (car) {
  console.log( car.get("type") );
});

console.log( dealership.length );
dealership.remove( jag );
console.log( dealership.length );
// We want an instance of a Dealership collection
  // Add the jag, { year: 1965, type: "XP" } and the galaxy in there
  // Try and sort them by year
  // Then console.log all of their types
