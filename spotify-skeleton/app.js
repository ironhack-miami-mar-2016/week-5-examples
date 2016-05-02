// app.js

$(document).on("ready", function () {

  $(".js-search-btn").on("click", onSearch);

});


function onSearch (event) {
  event.preventDefault();

  var searchTerm = $(".js-search-field").val();

  $.ajax({
    url: `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,

    success: updatePlayer,

    error: function (error) {
      alert("Search error :( ")
      console.log(error.responseJSON);
    }
  });
}


function updatePlayer (searchResults) {
  console.log("Got search results!");
  console.log(searchResults);

  var theTrack = searchResults.tracks.items[0];

  $(".js-player-title").text(theTrack.name);
  $(".js-player-artist").text(theTrack.artists[0].name);
  $(".js-player-img").prop("src", theTrack.album.images[0].url);
}
