var $allLinks = $( "a" );

var thumbnailify = function ( $link ) {
  var currentHref = $link.attr( "href" );
  var thumbnailUrl = youtube.generateThumbnailUrl( currentHref );
  var $img = $( "<img>" );
  $img.attr( "src", thumbnailUrl );
  $link.append( $img );

  $link.on("click", function (event) {
    event.preventDefault();
    // <iframe width="420" height="315" src="https://www.youtube.com/embed/PNXElmEUIJo" frameborder="0" allowfullscreen></iframe>

    var $iframe = $("<iframe></iframe>");
    $iframe.attr("width", 420);
    $iframe.attr("height", 315);
    $iframe.attr("frameborder", 0);
    $iframe.attr("allowfullscreen", true);

    var embedURL = youtube.generateEmbedUrl( currentHref );
    $iframe.attr("src", embedURL);

    $iframe.hide();
    $("#videoPlayer").html( $iframe );
    $iframe.fadeIn(1000);
  });
};

$allLinks.each(function () {
  var $currentLink = $( this );
  thumbnailify( $currentLink );
});
