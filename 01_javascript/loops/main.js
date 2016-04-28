// I need to have a starting point
// I need to have a condition
// I need a step (some way to make the condition evaluate to false - to end the loop)

// var count = 10; // Starting Point
// while (count > 0) { // Condition
//   console.log( count );
//
//   count -= 1; // count = count - 1; count--; //
// }
// console.log( "Lift off!" );
//
// // for ( start; condition or an end; step ) {}
// for (var count = 10; count > 0; count -= 1) {
//   console.log( count );
// }
// console.log( "Lift off!" );

// I want to have some way of saying my 9 times tables
  // I want to do that using a function called multiplyNumbers
  // 1 through to 12

// var multiplyNumbers = function ( number, factor ) {
//   var result = number * factor;
//   var message = number + " multipled by " + factor + " is " + result;
//   console.log( message );
//   return result;
// };
//
// for (var i = 1; i <= 12; i += 1) {
//   multiplyNumbers( 8, i );
// }
//
//
// for (var i = 0; i <= 1010; i += 1) {
//   console.log( i );
//   if ( i === 7 ) {
//     break; // Pause on a bad movie
//   }
// }
//
// for (var j = 1; j <= 12; j += 1) {
//   console.log( "J is now " + j );
//   for (var i = 1; i <= 12; i += 1) {
//     multiplyNumbers( j, i );
//   }
// }

var printOutLetters = function ( name ) {
  for (var i = 0; i < name.length; i += 1) {
    var currentLetter = name.charAt( i );
    console.log( "Letter " + i + " is " + currentLetter );
  }
};

printOutLetters( "Chico" );
printOutLetters( "Harpo" );
