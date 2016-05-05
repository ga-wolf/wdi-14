var myButton = document.querySelector( "#myTestButton" );

// someElement.addEventListener( typeOfEvent, whatToDo );
myButton.addEventListener("click", function () {
  console.log( "The button was clicked" );
  // document.body.style.background = "hotpink";
});

var myHeading = document.querySelector( "h1" );

var myCallback = function () {
  console.log( "The heading was clicked" );
};

myHeading.addEventListener( "click", myCallback );
// myHeading.removeEventListener( "click", myCallback );


var bill = document.querySelector( ".bill" );

var billsCallback = function (event) {
  // console.log( event );
  var newParagraph = document.createElement( "p" );
  var paragraphText = document.createTextNode( "Missed Call: Bill Murray at " + event.timeStamp );

  newParagraph.appendChild( paragraphText );
  document.body.appendChild( newParagraph );
};

bill.addEventListener( "click", billsCallback );


var thisShouldHappenRegularly = function () {
  console.log( "This just happened. But that this is the wrong this" );
};

// window.setInterval( whatToDo, delay );
// window.setInterval( thisShouldHappenRegularly, 100 );

// window.setInterval( function () {
//
// }, 100 );


var thisShouldBeDelayed = function () {
  console.log( "This should happen a little while after the page is loaded" );
};

// window.setTimeout( whatToDo, delay );
window.setTimeout( thisShouldBeDelayed, 1000 );
