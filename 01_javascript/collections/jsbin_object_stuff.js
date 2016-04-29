var someData = {};

var person = {
  username: "trump",
  occupation: "Idiot",
  location: "USA"
};

var bookSeries = {
  name: "In Search of Lost Time",
  author: "Marcel Proust",
  books: [
    "Swann's Way",
    "In the Shadow of Young Girls in Flower",
    "The Guermantes Way",
    "Sodom and Gomorrah",
    "The Prisoner",
    "The Fugitive",
    "Time Regained"
  ],
  showRating: function() {
    console.log("5 out of 5");
  }
};

var movie = {
  name: "Satantango",
  director: "Bela Tarr",
  duration: 432
};

var movieKeys = Object.keys(movie);
console.log(movieKeys);

for (var key in movie) {
  var value = movie[key];
  console.log(value);
}

var explorer = {
  firstName: "Jacques",
  lastName: "Cousteau",
  displayPurpose: function() {
    console.log("Hello World");
  }
};

var students = [
  { name: "John" },
  { name: "Miranda" },
  { name: "Billy" }
];

for (var i = 0; i < students.length; i += 1) {
    var student = students[i];
    console.log(student.name);
}

var explorer = {
  firstName: "Jacques",
  lastName: "Cousteau",
  displayFullName: function() {
    var message = this.firstName + " " + this.lastName;
    console.log(message);
  }
};

explorer.displayFullName();
