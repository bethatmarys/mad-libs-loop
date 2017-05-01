
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var input = ["city", "animal", "car", "occ", "color", "vac"];
    // console.log(input)
    input.forEach(function(blank) {
      // console.log(["input#" + blank, "." + blank]);
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });
    $("#story").show();
    event.preventDefault();
  });
});
