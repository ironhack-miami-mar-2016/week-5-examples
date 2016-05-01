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

        PokemonApp.PokemonEvolutions.renderSprite( response.pkdx_id, response.sprites[0].resource_uri );
      },

      error: function (error) {
        console.log("Oh no! Evolution error. :( ");
        console.log(error.responseJSON);
      }
    });
  });

};

PokemonApp.PokemonEvolutions.setupButton = function (pokemonName, evolutionList) {
  if (evolutionList.length === 0) {
      $(".js-show-evolutions").hide();
  }
  else {
    var evolutionUrls = evolutionList.map(function (evo) {
      return evo.resource_uri;
    });

    $(".js-show-evolutions")
      .data("pkmn-name", pokemonName)
      .data("evolution-ids", evolutionUrls.join(","))
      .show();
  }
};

PokemonApp.PokemonEvolutions.renderSprite = function (pokemonId, spriteUrl) {
  $.ajax({
    url: spriteUrl,

    success: function (response) {
      console.log(`Got sprite ${spriteUrl}`);
      console.log(response);
      $(`.js-ev-li-${pokemonId}`).append(`<img src="http://pokeapi.co${response.image}">`);
    },

    error: function () {
      alert(`Error getting sprite: ${spriteUrl}`);
    }
  });
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
