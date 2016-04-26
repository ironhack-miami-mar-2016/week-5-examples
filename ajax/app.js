// app.js

$(document).on("ready", function () {

  $(".js-character-ajax").on("click", function () {

    $.ajax({
      url: "https://ironhack-characters.herokuapp.com/characters",

      success: function (theData) {
        console.log("It worked!");
        console.log(theData);
        console.log(theData.length);

        theData.forEach(function (oneCharacter) {
          var html = `
            <li>
              <p>Name: ${oneCharacter.name}</p>
              <p>Occupation: ${oneCharacter.occupation}</p>
            </li>`;

          $(".js-character-list").append(html);
        });
      },

      error: function () { console.log("It failed. :("); }
    });

  });

});
