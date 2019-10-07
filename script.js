
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
  $("#myform").submit(
    function (event) {
      event.preventDefault();
      var size = $("#size").find(":selected").val();
      var crust = $("#Crust").find(":selected").val();
      var toppings = $("#toppings").find(":selected").val();
      if ((crust === "crispy") && (size === "small") && (toppings === "bacon")) {
        Price = 100;
        var totalPrice = Price * quantity;
      } else if ((crust === "crispy") && (size === "medium")) {
        Price = 100;
        var totalPrice = Price * quantity;
      } else if ((crust === "crispy") && (size === "large")) {
        Price = 100;
        var totalPrice = Price * quantity;
      }
      else if ((crust === 'stuffed') && (size === 'small')) {
        Price = 100;
        var totalPrice = Price * quantity;
      } else if ((crust === 'stuffed') && (size === 'medium')) {
        Price = 100;
        var totalPrice = Price * quantity;
      } else if ((crust === 'stuffed') && (size === 'large')) {
        Price = 100;
        var totalPrice = Price * quantity;
      }
      else if ((crust === 'glutten') && (size === 'small')) {
        Price = 100;
        var totalPrice = Price * quantity;
      } else if ((crust === 'glutten') && (size === 'medium')) {
        Price = 100;
        var totalPrice = Price * quantity;
      } else if ((crust === 'glutten') && (size === 'large')) {
        Price = 100;
        var totalPrice = Price * quantity;
      }
      else if ((toppings === 'bacon') && (size === 'small')) {
        Price = 100;
        var totalPrice = Price * quantity;
      } else if ((toppings === 'bacon') && (size === 'medium')) {
        Price = 100;
        var totalPrice = Price * quantity;
      } else if ((toppings === 'bacon') && (size === 'large')) {
        Price = 100;
        var totalPrice = Price * quantity;
      }
      else if ((toppings === 'Sausageon') && (size === 'small')) {
        Price = 100;
        var totalPrice = Price * quantity;
      } else if ((toppings === 'Sausageon') && (size === 'medium')) {
        Price = 100;
        var totalPrice = Price * quantity;
      } else if ((toppings === 'Sausageon') && (size === 'large')) {
        Price = 100;
        var totalPrice = Price * quantity;
      }
      else if ((toppings === 'Pepperroni') && (size === 'small')) {
        Price = 600;
        var totalPrice = Price * quantity;
      } else if ((toppings === 'Pepperroni') && (size === 'medium')) {
        Price = 900;
        var totalPrice = Price * quantity;
      } else if ((toppings === 'Pepperroni') && (size === 'large')) {
        Price = 1200;
        var totalPrice = Price * quantity;

      }
      else {
        alert("Fill in all form fields.")
      }
      var totalPizza = new Order(pizza, size, crust, toppings, quantity, delivery);

      $("#display").text(totalPizza.Order() + "and the total price is " + totalPrice);

    }
  );

  $("#yes").click(function () {
    var location = prompt("Enter your location delivery");
    if (location !== "") {
      alert('Your pizza will be delivered after 30mins  at ' + location + '. Thank you very much.');
    } else {
      alert('Thank you very much');
    }
  });
});