(document).ready(function () {
    $("#submit").submit(function (event) {
      var yes = $("input:first").val();
      var no = $("input#email").val();
      if (yes != '') {
        prompt("Type you location");
      } else {
        alert("Thank you for chosing us.");
      }
      event.preventDefault();
    })
  });