var t1;
$(document).ready(function () {

  var $bill = $("img");
  t1 = TweenMax.to( $bill, 5, {
    left: "80vw",
    yoyo: true,
    rotation: 360,
    repeat: -1,
    onUpdate: function () {
      console.log("Animation is happening");
    }
  });

  $(".reverse").on("click", function () {
    t1.reverse();
  });
  $(".pause").on("click", function () {
    t1.pause();
  });
  $(".play").on("click", function () {
    t1.play();
  });
  $(".doubleSpeed").on("click", function () {
    t1.timeScale( 2 );
  });

});
