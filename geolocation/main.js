// main.js

$(document).on("ready", function () {

  if ("geolocation" in navigator) {
    console.log("Geolocation is available");

    navigator.geolocation.getCurrentPosition( displayPosition, showPositionError );
  }

  else {
    alert("You don't have Geolocation. Time to upgrade your browser.")
  }

});


function displayPosition (data) {
  console.log("Got position!");
  $(".js-set-latitude").text( data.coords.latitude );
  $(".js-set-longitude").text( data.coords.longitude );
}


function showPositionError (error) {
  console.log("Failed to get position :( ");
  console.log(error);
}
