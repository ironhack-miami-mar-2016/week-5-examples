// app.js

$(document).on("ready", function () {

  $(".js-character-ajax").on("click", function () {

    $.ajax({
      url: "https://ironhack-characters.herokuapp.com/characters",

      success: function () { console.log("It worked!"); },

      error: function () { console.log("It failed. :("); }
    });

  });

});
