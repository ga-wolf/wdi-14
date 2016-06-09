var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};

// Multiply each value in objectToMap by a random number and return an object with the changed values
var mappedObject = _.mapObject( objectToMap, function (v, k) {
  return v * _.random(1, 100);
});
console.log( mappedObject );

// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
var arrayVersion = _.pairs( objectToMap );
console.log( arrayVersion );

// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
var invertedObject = _.invert( objectToMap );
console.log( invertedObject );

// Remove the "start" key from objectToMap in two different ways
var pickedObject = _.pick( objectToMap, "middle", "end" );
var withNoStartKey = _.omit( objectToMap, "start" );
console.log( pickedObject );
console.log( withNoStartKey );
