//business logic

function MyPizza(size, type){
  this.pizzaSize = size;
  this.pizzaType = type;
  this.pizzaCrusting = [];
}

function Location(estate,phone_number){
  this.myEstate = estate;
  this.myPhone = phone_number;
}

MyPizza.prototype.fullDetails = function(){
  return this.pizzaSize + " " + this.pizzaType + " " + this.pizzaCrusting;
}

Location.prototype.fullLocation = function(){
  return  this.myEstate + " " + this.myPhone;
}

// user interface logic
$(document).ready(function(){
  $('#submit').click(function(){
  var radioValue = $("input[name= size]:checked").val();
  var radioValue1 = $("input[name=type]:checked").val();
  var crustInput= [];
   $.each($("input[name='crust']:checked"), function(){

                crustInput.push($(this).val());
            });



  var newMypizza = new MyPizza(radioValue,radioValue1);
    newMypizza.pizzaCrusting.push(crustInput);

   $('#outputCrusting').html(newMypizza.pizzaCrusting);
  $('#outputSize').html(newMypizza.pizzaSize);
  $('#outputType').html(newMypizza.pizzaType);

   $('').text(crustInput.length + newMypizza.fullDetails());

   var inputEstate = $("input#my-estate").val();
   var inputPhone = $("input#my-phone").val();

   var newLocation = new Location(inputEstate,inputPhone);




  var comparison = function(){
    var totalPrice = 0;
    var sizePrices = [300,400,500];
    var typePrices = [200,250,300];
    var topping = 50;

  if(newMypizza.pizzaSize == " " || newMypizza.pizzaType == ' ' ){
    alert("Enter the values for pizza Size and Type");
  }
    else if(newMypizza.pizzaSize == "small" && newMypizza.pizzaType == 'stuffed' ){
    totalPrice = sizePrices[0] + typePrices[0] + crustInput.length*50;
    $('#price').html(totalPrice);
  }
   else if(newMypizza.pizzaSize == "small" && newMypizza.pizzaType == 'crusted'){
    totalPrice = sizePrices[0] + typePrices[1] + crustInput.length*50;
    $('#price').html(totalPrice);
  }
  else if(newMypizza.pizzaSize == "small" && newMypizza.pizzaType == 'glutten'){
    totalPrice = sizePrices[0] + typePrices[2] + crustInput.length*50;
    $('#price').html(totalPrice);
  }
 else if (newMypizza.pizzaSize == "medium" && newMypizza.pizzaType == 'stuffed'){
   totalPrice = sizePrices[1] + typePrices[0] + crustInput.length*50;
    $('#price').html(totalPrice);
 }
 else if (newMypizza.pizzaSize == "medium" && newMypizza.pizzaType == 'crusted'){
   totalPrice = sizePrices[1] + typePrices[1] + crustInput.length*50;
    $('#price').html(totalPrice);
 }
 else if (newMypizza.pizzaSize == "medium" && newMypizza.pizzaType == 'glutten'){
   totalPrice = sizePrices[1] + typePrices[2] + crustInput.length*50;
    $('#price').html(totalPrice);
 }
 else if (newMypizza.pizzaSize == "large" && newMypizza.pizzaType == 'stuffed'){
   totalPrice = sizePrices[2] + typePrices[0] + crustInput.length*50;
    $('#price').html(totalPrice);
 }
  else if (newMypizza.pizzaSize == "large" && newMypizza.pizzaType == 'crusted'){
   totalPrice = sizePrices[2] + typePrices[1] + crustInput.length*50;
    $('#price').html(totalPrice);

 } else if (newMypizza.pizzaSize == "large" && newMypizza.pizzaType == 'glutten'){
   totalPrice = sizePrices[2] + typePrices[2] + crustInput.length*50;
    $('#price').html(totalPrice);
 }
 else{
  alert("Ensure you have checked the size and type");
   $('h3').html('Re-check the inputs');

 }
  }
  comparison();

});

  $("#submit").click(function() {
      $(".serve").hide();
      $('#location').hide();
      $(".Order").show();

    });

  $("#deliver").click(function(){
    $(".Order").hide();
    $(".location").show();

  });
  $("#deliver-now").click(function(){
    alert("Your pizza will be delivered. Thank you!" );
    $('.location').hide();
    $(".serve").show();


  });

});
