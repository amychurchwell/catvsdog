$(document).ready(function() {
  $("button#cat-but").click(function() {
    $("ul.cat-sound").append("<li>meow!</li>");
  });

  $("button#dog-but").click(function() {
    $("ul.dog-sound").append("<li>ruff!</li>");
  });

  $("button#last").click(function(){
    $("div.pop-up").after("<img src='img/bubbles.gif'>");
  });

});
