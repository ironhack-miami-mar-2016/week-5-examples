// main.js

console.log("HELLO");

$(document).on("ready", function () {

  $(".js-dont-do-it").on("click", function () {
    $(".container").append('<img src="http://www.gif-maniac.com/gifs/54/54249.gif">')
  });

});
