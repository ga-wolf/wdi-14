$(document).ready(function () {
  var $lucky = $("#lucky");
  var $luckyButton = $lucky.find("button");

  $luckyButton.on("click", function () {
    $lucky.find("p").load( "/lotto_numbers" );
  });

  $("#uptime button").on("click", function () {

    $.ajax({
      url: "/uptime",
      type: "GET",
      dataType: "TEXT"
    }).done(function ( data ) {
      $("#uptime p").prepend( data );
      $("#uptime p").prepend( "<br />" );
    });

  });
  // <div id="dashboard">
  //   <button>Get important stuff</button>
  //
  //   <p class="time"></p>
  //   <p class="luckyNumber"></p>
  //   <p class="fortune"></p>
  // </div>

  $("#dashboard button").on("click", function () {
    // What type of request am I making? Always an HTTP method (GET, POST, PUT, DELETE)
    // What URL do I care back? Is it a relative URL or an absolute URL
    // What sort of information am I requesting? JSON, JSONP, TEXT

    $.ajax({
      url: "/info",
      type: "GET",
      dataType: "JSON"
    }).done(function ( data ) {
      var fortune = data.fortune;
      var time = data.time;
      var luckyNumber = data.lucky_number;

      $("p.time").text( time );
      $("p.luckyNumber").text( luckyNumber );
      $("p.fortune").text( fortune );
    });

  // Make a GET request, asking for JSON, to /info
  // Once that request successfully comes back, and there is a response to deal with:
    // Show the time in the paragraph with the class of time
    // Show the fortune in the paragraph with the class of fortune
    // Show the lucky number in the paragraph with the class of luckyNumber
  });



});
