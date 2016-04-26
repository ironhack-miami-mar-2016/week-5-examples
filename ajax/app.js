// app.js

$(document).on("ready", function () {

  $(".js-character-ajax").on("click", function () {

    $.ajax({
      url: "https://ironhack-characters.herokuapp.com/skjdhfksjhkfjhjfhsk",

      success: function (theData) {
        console.log("It worked!");
        console.log(theData);

        displayCharacters(theData);
      },

      error: function (theError) {
        console.log("It failed. :( ");
        console.log(theError.responseJSON);
      }
    });

  });

});


function displayCharacters (characters) {
  characters.forEach(function (oneCharacter) {
    var html = `
      <li>
        <p>Name: ${oneCharacter.name}</p>
        <p>Occupation: ${oneCharacter.occupation}</p>
      </li>`;

    $(".js-character-list").append(html);
  });
}
