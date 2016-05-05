// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

var body = document.querySelector( "body" );
body.style.fontFamily = "Arials, sans-serif";


// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.

var nickname = document.querySelector( "#nickname" );
nickname.innerText = "Wolf";

var favorites = document.querySelector( "#favorites" );
favorites.innerText = "Satantango";

var hometown = document.querySelector( "#hometown" );
hometown.innerText = "Injidup";


// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

var allListItems = document.querySelectorAll( "ul li" );

for ( var i = 0; i < allListItems.length; i += 1 ) {
  var listItem = allListItems[i];
  listItem.className = "listitem";
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var myImage = document.createElement( "img" );
myImage.src = "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/10/22/1413973385418/European-grey-wolf--014.jpg";

document.body.appendChild( myImage );




var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

for ( var i = 0; i < books.length; i += 1 ) {
  var book = books[i];
  var pTag = document.createElement( "p" );
  var pTagText = document.createTextNode( book.title );

  pTag.appendChild( pTagText );
  document.body.appendChild( pTag );
}
