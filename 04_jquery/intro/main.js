var $aTag = $( "a" );

// New paragraph
var $p = $( "<p></p>" );
// Put some text in it
$p.text( "Here is some random stuff" );
$p.css({
  "color" : "gainsboro",
  "text-decoration" : "underline",
  "text-transform" : "uppercase",
  "font-size": "20px"
});
$("body").append( $p );


var $allParagraphs = $( "p" );

for ( var i = 0; i < $allParagraphs.length; i += 1 ) {
  var currentParagraph = $allParagraphs[i];
  var $currentParagraph = $( currentParagraph );
  $currentParagraph.html( "Paragraph " + i );
}

for ( var i = 0; i < $allParagraphs.length; i += 1 ) {
  var $currentParagraph = $allParagraphs.eq( i );
  var currentHTML = $currentParagraph.html();
  $currentParagraph.html( currentHTML += " wooooo" );
}

$allParagraphs.each(function (i) {
  $(this).html( "This is awesome now " + i );
});
