function Pizza(pizzaSize,pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.sizeCost = function () {
  var pizzaSizePrice = 1000;
  if(this.pizzaSize === "Large" ) {
     return pizzaSizePrice =1000 ;
  }

  else {
    return pizzaSizePrice =800 ;
  }

}
// pizzaToppings
Pizza.prototype.toppingsCost = function () {
var pizzaPrice =200 ;
pizzaPrice += this.pizzaToppings.length ;
return pizzaPrice;
}

Pizza.prototype.totalPizzaCost = function (testPizza) {
  return "Your pizza costs" + " " + (this.sizeCost() + this.toppingsCost()) + " sh."+"Thank you.";
}


// my jquerry

$(document).ready(function() {
  $('form#new-pizza').submit(function(event) {
    event.preventDefault();

    var inputtedSize = $('#pizzaSize input:radio:checked').val();
    var checkedToppings = $('input[name=toppings]:checked');
    var inputtedToppings = [];
  $(checkedToppings).each(function() {
    inputtedToppings.push($(this).val());
    });
    var newPizza = new Pizza(inputtedSize, inputtedToppings);

    $("#order").text(newPizza.totalPizzaCost());

  });

});
