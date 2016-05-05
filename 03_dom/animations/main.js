var nick = document.querySelector( ".nick" );
var widthTimer = null;

// nick.setAttribute("width", "200");
// nick.style.width = "200px";

var makeImageBigger = function () {
  // Get the current width
  var currentWidth = nick.width;
  var currentWidth = parseFloat( nick.style.width );

  // console.log( "This just ran" );
  if ( currentWidth > 800 ) {
    window.clearInterval( widthTimer );
  }

  // Add ten to it
  var newWidth = currentWidth + 1;

  // Then change the width to be the new value
  nick.style.width = newWidth + "px";
};

widthTimer = window.setInterval( makeImageBigger, 1 );
