var searchOMDB = function ( e ) {
  // By default, submitting a form will refresh the page - we don't want that
  e.preventDefault();

  // Get the input's value, if it is an empty string, we don't want to do anything more
  var searchTitle = $("#search").val();
  if ( searchTitle === "" ) {
    return false;
  }

  // Store references to elements
    // For performance
    // Make sure you prefix it with a $
  var $poster = $("#poster");
  var $title = $("#title");
  var $plot = $("#plot");

  var baseURL = "http://omdbapi.com?t=";

  // We know that this function is going to by our AJAX method
    // Because it is in the success handler, it will be given a piece of information - make sure we save that
  var displayMovie = function ( data ) {
    var poster = data.Poster;
    var plot = data.Plot;
    var title = data.Title;

    // Change the src attribute of $("#poster")
    $poster.attr("src", poster);
    // Change the text of $("#title")
    $title.text( title );
    $plot.text( plot );

    // Change the body background-image
      // url(http://somewebsite.com/image.jpg)
    $("body").css({
      "background-image": "url(" + poster + ")"
      // background-image: url('aknlaknalkn');
    });
  };

  // Is making a GET request to a URL that looks something like "http://omdbapi.com?t=Jaws", it is asking for JSON
    // If that is successful, call the function that is stored in the displayMovie function
  $.ajax({
    url: baseURL + searchTitle, // http://omdbapi.com?t=Jaws
    dataType: "JSON",
    type: "GET"
  }).done( displayMovie );

  // Stop the page refreshing
  // Make an AJAX request
    // http://omdbapi.com?t=Satantango
    // GET
  // Change some elements on the page
};

// We wait until every element has loaded
$(document).ready(function () {
  // Add an event handler to every form on the page. When that particular form is submitted (via clicking the button or input type="submit" or by clicking enter in the last input), call the searchOMDB function
  $("form").on( "submit", searchOMDB );
});
