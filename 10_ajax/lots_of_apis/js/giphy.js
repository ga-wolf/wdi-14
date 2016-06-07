// Set up all the important variables:
  // Important elements
  // base URLs
  // Timers
  // Configuration
var baseGiphyURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";
var $baseGiphyContent = $(".giphy .content");
var giphyTimer = null;

// How to display the information
var displayGiphyInformation = function ( data ) {
  // Access the information that we care about and save that in variable
  var imageURL = data.data.image_url;
  // We create our elements and set their details
  var $img = $("<img>").attr( "src", imageURL );
  // We put them on the page
  $baseGiphyContent.prepend( $img );
};

// How to request the information
  // The URL in question
  // The HTTP method
  // The dataType
  // And what to do when it succeeds
var getGiphyInformation = function () {
  // In the most basic form, the URL is just the base URL
  var url = baseGiphyURL;
  // Access the current value of the input
  var currentValue = $(".search").val();

  // If the current value is not an empty string
  if ( currentValue !== "" ) {
    // Add more information - &tag=hotdogs
    url += "&tag=";
    url += currentValue;
  }

  // We ask for JSON information from the Giphy website, when that it is successful, call the displayGiphyInformation function
  $.ajax({
    url: url,
    type: "GET",
    dataType: "JSON"
  }).done( displayGiphyInformation );
};

// Wait until the page has completely loaded before you start working with this stuff
$(document).ready(function () {
  getGiphyInformation(); // Ask Giphy for some information as soon as the page has loaded

  // If a button with the class of new that is within an element with the class of giphy is clicked, call getGiphyInformation
  $(".giphy button.new").on( "click", getGiphyInformation );

  // We set a timer so that we can search at a regular interval
    // Every second it calls getGiphyInformation
  giphyTimer = window.setInterval( getGiphyInformation, 1000 );

  // If the button with the class of stop is clicked, stop the timer
  $(".giphy button.stop").on("click", function () {
    window.clearInterval( giphyTimer );
  });
});
