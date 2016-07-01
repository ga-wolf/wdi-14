$(document).ready(function () {

  var firstPath = document.querySelector("#svg_3");
  var secondPath = document.querySelector("#svg_4");

  var firstPathLength = firstPath.getTotalLength();
  var secondPathLength = secondPath.getTotalLength();

  $("#svg_3").css({
    "stroke-dasharray": firstPathLength,
    "stroke-dashoffset": firstPathLength,
  });
  $("#svg_4").css({
    "stroke-dasharray": secondPathLength,
    "stroke-dashoffset": secondPathLength,
  });

  $("path").css("opacity", "1");

  $("path").addClass("complete");

  // $("path").animate({
  //   "stroke-dashoffset": "0"
  // }, 3000);

  // $("#svg_3").animate({
  //   "stroke-dashoffset": "0"
  // }, 3000, function () {
  //   $("#svg_4").animate({
  //     "stroke-dashoffset": "0"
  //   }, 3000);
  // });

});
