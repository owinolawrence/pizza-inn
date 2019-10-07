
function Order(pizza, size, crust, toppings, quantity) {
  this.pizza = pizza;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.quantity = quantity;
}
Order.prototype.fullOrder = function () {
  return "Your order is " + this.quantity + " " + this.size + " " + this.pizza + "  with " + this.crust + " crust and " + this.toppings + " toppings ";
}
$(document).ready(function () {
  $("#ordernow").click(function (event) {
    event.preventDefault();
    var pizza = $("select#pizzainput").val();
    var size = $("select#sizeinput").val();
    var crust = $("select#crustinput").val();
    var toppings = $("select#toppingsinput").val();
    var quantity = $("#quantityinput").val();
    if ((crust === "Crispy") && (size === "Small") && (toppings === "Extra Bacon")) {
      Price = 100;
      var totalPrice = Price * quantity ;
    } else if ((crust === "Crispy") && (size === "Medium")) {
      Price = 100;
      var totalPrice = Price * quantity ;
    } else if ((crust === "Crispy") && (size === "Large")) {
      Price = 100;
      var totalPrice = Price * quantity;
    }
    else if ((crust === 'Stuffed') && (size === 'Small')) {
      Price = 100;
      var totalPrice = Price * quantity;
    } else if ((crust === 'Stuffed') && (size === 'Medium')) {
      Price = 100;
      var totalPrice = Price * quantity;
    } else if ((crust === 'Stuffed') && (size === 'Large')) {
      Price = 100;
      var totalPrice = Price * quantity;
    }
    else if ((crust === 'Gluten-free') && (size === 'Small')) {
      Price = 100;
      var totalPrice = Price * quantity;
    } else if ((crust === 'Gluten-free') && (size === 'Medium')) {
      Price = 100;
      var totalPrice = Price * quantity;
    } else if ((crust === 'Gluten-free') && (size === 'Large')) {
      Price = 100;
      var totalPrice = Price * quantity;
    }
    else if ((Toppings === 'Bacon') && (size === 'Small')) {
      Price = 100;
      var totalPrice = Price * quantity;
    } else if ((Toppings === 'Bacon') && (size === 'Medium')) {
      Price = 100;
      var totalPrice = Price * quantity;
    } else if ((Toppings === 'Bacon') && (size === 'Large')) {
      Price = 100;
      var totalPrice = Price * quantity;
    }
    else if ((Toppings === 'Sausageon') && (size === 'Small')) {
      Price = 100;
      var totalPrice = Price * quantity;
    } else if ((Toppings === 'Sausageon') && (size === 'Medium')) {
      Price = 100;
      var totalPrice = Price * quantity;
    } else if ((Toppings === 'Sausageon') && (size === 'Large')) {
      Price = 100;
      var totalPrice = Price * quantity;
    }
    else if ((Toppings === 'Pepperroni') && (size === 'Small')) {
      Price = 600;
      var totalPrice = Price * quantity;
    } else if (( Toppings=== 'Pepperroni') && (size === 'Medium')) {
      Price = 900;
      var totalPrice = Price * quantity;
    } else if ((Toppings === 'Pepperroni') && (size === 'Large')) {
      Price = 1200;
      var totalPrice = Price * quantity;

    }
    else {
      alert("Fill in all form fields.")
    }
    var totalPizza = new Order(pizza, size, crust, toppings, quantity,delivery);

    $("#display").text(totalPizza.fullOrder() + "and the total price is " + totalPrice);
  });
  // $("#yes").click(function () {
  //   var location = prompt("Enter your location delivery");
  //   if (location !== "") {
  //     alert('Your pizza will be delivered at 30mins at your ' + '  ' + location + '. Thank you very much.');
  //   } else {
  //     alert('Thank you very much');
  //   }
  // });
});