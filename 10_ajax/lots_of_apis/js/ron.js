// Set up variables
var baseRonURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
var $baseRonElement = $(".ron");
var $baseRonContent = $(".ron .content");
var ronTimer = null;

// Figure out how to display the information
var displayRonInformation = function ( data ) {
  // Save the data that you care about
  var quote = data[0];
  // We create a new paragraph
  var $p = $("<p>");
  // Change it's text
  $p.text( quote );

  // Put it on the page
  $baseRonContent.prepend( $p );
};

// Figure out how to get the information
var getRonInformation = function () {
  // Make a GET request, asking for JSON, from baseRonURL (http://ron-swanson-quotes.herokuapp.com/v2/quotes)
    // Once that is done, call the displayRonInformation function and pass it the data that was received
  $.ajax({
    url: baseRonURL,
    dataType: "JSON",
    type: "GET"
  }).done( displayRonInformation );
};

$(document).ready(function () {
  // Call for Ron information
  getRonInformation();
  // Request more information every second
    // Save the timer ID into the ronTimer variable
    
  // var ronTimer = null; => at the top of the file
  ronTimer = window.setInterval( getRonInformation, 1000 );

  // When the button is clicked, clear the timer that is running getRonInformation
  $(".ron button").on("click", function () {
    window.clearInterval( ronTimer );
  });
});
