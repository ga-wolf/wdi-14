var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// Create an array of every five numbers between 30 and 101
var arrayOfEveryFiveNumbers = _.range(30, 102, 5);
console.log( arrayOfEveryFiveNumbers );

// Turn bumpyArr into one flat array (no nested arrays)
var flatArray = _.flatten( bumpyArr );
console.log( flatArray );

// Remove all of the falsey elements in the uncompactedArr
var noFalsey = _.compact( uncompactedArr );
console.log( noFalsey );

// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
var uniqueElements = _.union( [ 1, 25, 100 ], [ 1, 14, 25 ], [ 24, Infinity, -0 ] );
console.log( uniqueElements );

// Find the index of the first element in numbers that is over 7 and is even
var importantIndex = _.findIndex( numbers, function (num) {
  return num > 7 && num % 2 === 0;
});
console.log( importantIndex );

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
var unzippedObject = _.unzip( arrToTransform );
var transformedObject = _.object( unzippedObject );
console.log( transformedObject );
