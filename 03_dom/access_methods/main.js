var showYahoo = function () {
  var searchLink = document.querySelector( ".searchEngine" );
  console.log( searchLink );

  searchLink.href = "http://www.yahoo.com";
  searchLink.className = "bestSearchEngine";
  searchLink.innerHTML = "Search with Yahoo";

  searchLink.style.fontSize = "100px";
};

var emptyPage = function () {
  var bodyTag = document.querySelector( "body" );
  console.log( bodyTag.innerHTML );

  bodyTag.innerHTML = "<h1>Goodbye, cruel world</h1>";
  bodyTag.innerHTML += "<p>No soup for you</p>";
};

var bringBackTheLasagna = function () {
  // Create the element
  var newHeading = document.createElement("h2");
  // Then we create the text to go in the element
  var textForHeading = document.createTextNode("Greek Lasagna");

  // We style the element (if necessary)
  newHeading.style.fontFamily = "Comic Sans";
  newHeading.style.color = "rebeccapurple";

  // We put the text in the element
  newHeading.appendChild( textForHeading );
  // Then put the element on the page
  document.body.appendChild( newHeading );
};

var bringBackTheBill = function () {
  // Create the element
  var bill = document.createElement( "img" );

  // Create a random round number approximately between 400 and 800
  var randomSize = (Math.random() + 1) * 100;
  randomSize = Math.round( randomSize );

  // Creates our image URL
  var imageURL = "http://www.fillmurray.com/";
  imageURL += randomSize;
  imageURL += "/";
  imageURL += randomSize;

  bill.src = imageURL;

  // Style it
  bill.style.border = "10px dashed papayawhip";

  // Put the element on the page
  document.body.appendChild( bill );
};


var bodyElement = document.querySelector( "body" );

bodyElement.style.background = "chartreuse";
bodyElement.style.fontFamily = "monospace";
bodyElement.style.textAlign = "center";
bodyElement.style.paddingTop = "100px";









console.log( document );

var bill = document.getElementById( "bill" );
console.log( bill );

var randomPara = document.getElementById( "randomParagraph" );
console.log( randomPara );


var listItems = document.getElementsByTagName( "li" );
console.log( listItems );

for ( var i = 0; i < listItems.length; i += 1 ) {
  var listItem = listItems[i];
  var newText = "List " + (i + 1);
  // var text = listItem.innerHTML;
  // console.log( text );
  // listItem.innerHTML = newText;
}

var greatMovies = document.getElementsByClassName( "movie" );
console.log( greatMovies );

for ( var i = 0; i < greatMovies.length; i += 1 ) {
  var movieElement = greatMovies[i];
  var currentText = movieElement.innerHTML;
  var uppercaseText = currentText.toUpperCase();

  movieElement.innerHTML = uppercaseText;
}

var firstFood = document.querySelector( "ol li" );
console.log( firstFood.innerHTML );

var allFoods = document.querySelectorAll( "ol li" );
console.log( allFoods );
