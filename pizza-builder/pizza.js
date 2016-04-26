// Write your Pizza Builder JavaScript in this file.

$(document).on("ready", function () {

  $(".btn-pepperonni").on("click", function () {
    $(".btn-pepperonni").toggleClass("active");
    updatePrice();
  });

  $(".btn-mushrooms").on("click", function () {
    $(".btn-mushrooms").toggleClass("active");
    updatePrice();
  });

  $(".btn-green-peppers").on("click", function () {
    $(".btn-green-peppers").toggleClass("active");
    updatePrice();
  });

  $(".btn-sauce").on("click", function () {
    $(".btn-sauce").toggleClass("active");
    updatePrice();
  });

  $(".btn-crust").on("click", function () {
    $(".btn-crust").toggleClass("active");
    updatePrice();
  });

});


function updatePrice () {
  var priceSoFar = 10;

  if ($(".btn-pepperonni").hasClass("active")) {
    priceSoFar += 1;
  }

  if ($(".btn-mushrooms").hasClass("active")) {
    priceSoFar += 1;
  }

  if ($(".btn-green-peppers").hasClass("active")) {
    priceSoFar += 1;
  }

  if ($(".btn-sauce").hasClass("active")) {
    priceSoFar += 3;
  }

  if ($(".btn-crust").hasClass("active")) {
    priceSoFar += 5;
  }

  $(".js-total-price").text("$" + priceSoFar);
}
