// class Movie ... end
  // Blueprint
var Movie = Backbone.Model.extend({
  // That will be changed if necessary
  defaults: {
    name: "N/A",
    director: "N/A",
    plot: "N/A",
    duration: "N/A"
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
// var genericMovie = new Movie();
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
