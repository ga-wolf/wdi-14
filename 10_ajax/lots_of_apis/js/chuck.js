var baseChuckURL = "http://api.icndb.com/jokes/random?limitTo=[nerdy]";
var $baseChuckContent = $(".chuck .content");
var chuckTimer = null;

var displayChuckInformation = function (data) {
  var joke = data.value.joke;
  var $p = $("<p>").text( joke );
  $baseChuckContent.prepend( $p );
};

var getChuckInformation = function () {
  $.ajax({
    url: baseChuckURL,
    dataType: "JSON",
    type: "GET"
  }).done( displayChuckInformation );
};

$(document).ready(function () {
  getChuckInformation();
  chuckTimer = window.setInterval( getChuckInformation, 1000 );

  $(".chuck button").on("click", function () {
    window.clearInterval( chuckTimer );
  });
});
