$(function() {
  $("#add").on("click", function() {

    // selecting the value of input field
    var val = $("input").val();

    // creating new li element to adding the value to the list
    if (val !== "") {
      var elem = $("<li></li>").text(val);
      // adding remove button to the item
      $(elem).append("<button class=remove>X</button>");
      $("#list").append(elem);
      $("input").val(""); // clear the input
      $(".remove").on("click", function() {
        $(this).parent().remove();
      });
    }
  });
});
