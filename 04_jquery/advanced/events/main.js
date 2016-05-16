$(document).ready(function () {});
// window.onload = function () {};
$(document).ready(function () {

  $( "h1" ).on("click", function () {});
  var $newHeading = $( "<h3></h3>" );

  $newHeading.text( "Hello World" ).css("font-size", "50px").prependTo( "body" );

  // $( "<h3></h3>" ).text( "Hello World" ).css("font-size", "50px").appendTo( "body" );

  // $("body").append( $newHeading );

  // $newHeading.text( "Hello World" );
  // $newHeading.css("font-size", "50px");



  var animateBox = function () {

    $(".animate").animate({
      width: "500px",
      top: "50px"
    }, 1000).animate({
      width: "200px",
      top: "0px"
    }, 1000, animateBox);

    // Set the width of this box to be 500px
    // $(".animate").animate({
    //   width: "500px",
    //   top: "50px"
    // }, 1000, function () {
    //   $(".animate").animate({
    //     width: "200px",
    //     top: "0px"
    //   }, 1000, animateBox);
    // });

  };

  // $(document).on("click", "a", function () {});

  $(".pixel").on("mouseover", function () {
  // $(document).on("mouseover", ".pixel", function () {
    // console.log( this );
    var $currentPixel = $( this );
    $currentPixel.css("background", "hotpink");
    $currentPixel.text( "O" );
  });

  // $(".pixel1").on("mouseover", function () {
  //   $(".pixel1").css("background", "hotpink");
  // });
  //
  // $(".pixel2").on("mouseover", function () {
  //   $(".pixel2").css("background", "hotpink");
  // });
  //
  // $(".pixel3").on("mouseover", function () {
  //   $(".pixel3").css("background", "hotpink");
  // });


  $(window).on("keypress", function (e) {
    var currentLetter = String.fromCharCode( e.keyCode );
    // Find and store the h2 with the class of typing
    var $h2 = $("h2.typing");
    // Store its current HTML
    var currentHTML = $h2.html();
    var newHTML = currentHTML + currentLetter;
    // I then want to add whatever the currentLetter is
    // $h2.text( newHTML );
  });

  $(window).on("mousemove", function (event) {
    // Create
    var $div = $( "<div></div>" );

    // Manipulate
    $div.addClass( "dot" );
    // Change the top and left positions so that they represent where the mouse is
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    $div.css("top", mouseY);
    $div.css("left", mouseX);
    // $div.css({
    //   top: mouseX,
    //   left: mouseY
    // });

    // Inject
    // $("body").append( $div );
  });


  // Keep track of where the mouse is
  // $(window).on("mousemove", function (event) {
  //   // Create a new paragraph
  //   var $p = $("<p></p>");
  //   var mouseX = event.clientX;
  //   var mouseY = event.clientY;
  //
  //   var message = "Mouse X: " + mouseX;
  //   message += ". Mouse Y: " + mouseY;
  //
  //   $p.text( message );
  //
  //   $("body").prepend( $p );
  // });

});
