// We create a jQuery collection (array) by selecting all the anchor tags on the page
var $allLinks = $( "a" );

// We use the each method instead of the for loop
$allLinks.each(function () {
  // The current DOM node is going to be saved as the variable this
    // Let's select that with jQuery
  var currentHref = $(this).attr( "href" );
  var thumbnailUrl = youtube.generateThumbnailUrl( currentHref );

  // Angle brackets mean creation
  var $img = $( "<img>" );
  $img.attr( "src", thumbnailUrl );

  // We want to put it at the end of the link
  $(this).append( $img );
});
