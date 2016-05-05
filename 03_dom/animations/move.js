var nick = document.querySelector( ".nick" );
// Starting style - make sure you use units when necessary!
nick.style.top = "0px";
nick.style.left = "0px";
var leftTimer = null;

var makeNickMove = function () {
  var currentLeftValue = parseFloat( nick.style.left );

  // If the image is near the right of the screen, stop the timer
  if ( currentLeftValue > window.innerWidth - 200 ) {
    return;
  }

  var newLeftValue = currentLeftValue + 1;

  nick.style.left = newLeftValue + "px";
};

leftTimer = window.setInterval( makeNickMove, 10 );
