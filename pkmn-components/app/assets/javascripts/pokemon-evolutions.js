PokemonApp.PokemonEvolutions = function (pokemonName, evolutionUrls) {
  this.pokemonName = pokemonName;
  this.evolutionUrls = evolutionUrls;
};

PokemonApp.PokemonEvolutions.prototype.render = function () {

  $(".js-ev-list").empty();
  $(".js-ev-title").text(`Evolutions for ${this.pokemonName}`);
  $(".js-ev-loading").show();
  $(".js-ev-modal").modal("show");

  this.evolutionUrls.forEach(function (evoUrl) {

    $.ajax({
      url: evoUrl,

      success: function (response) {
        console.log(`Got evolution ${evoUrl}`);
        console.log(response);

        $(".js-ev-loading").hide();

        var html = `
          <li class="js-ev-li-${response.pkdx_id}">
            ${response.name}
          </li>`;

        $(".js-ev-list").append(html);
      },

      error: function (error) {
        console.log("Oh no! Evolution error. :( ");
        console.log(error.responseJSON);
      }
    });
  });

};

PokemonApp.PokemonEvolutions.setupButton = function (pokemonName, evolutionList) {
  var evolutionUrls = evolutionList.map(function (evo) {
    return evo.resource_uri;
  });

  $(".js-show-evolutions")
    .data("pkmn-name", pokemonName)
    .data("evolution-ids", evolutionUrls.join(","));
};


// =============================================================================


$(document).on("ready", function () {

  $(".js-show-evolutions").on("click", function (event) {
    var $button = $(event.currentTarget);

    var pokemonName = $button.data("pkmn-name");
    var evolutionUrls = $button.data("evolution-ids").split(",");

    var evolutions = new PokemonApp.PokemonEvolutions( pokemonName, evolutionUrls );

    evolutions.render();
  });
});
