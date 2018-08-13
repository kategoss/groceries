$(document).ready(function () {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    $("#inputForm").toggle();
    var foods = $("#userInput").val().toUpperCase().split(" ").sort().forEach(function(food) {
      $(".groceryList").append("<li>"+food+"</li>");
    });
  console.log(foods);
});
});
