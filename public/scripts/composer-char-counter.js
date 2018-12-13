$(document).ready(function() {
  // --- our code goes here ---
  console.log("It's working");
});

$(document).on("keyup", ".new-tweet textarea", function() {
    var allowedChar = 140;
    var currentChar = this.value.length;
    var availableChar = allowedChar - currentChar;
    if (availableChar < 0){
      $(this).parent().find(".counter").html(availableChar).addClass("red");
    } else {
      $(this).parent().find(".counter").html(availableChar).removeClass("red");
    }  
});


// let count = 0;
// $(document).on("click", ".old-tweets .fa-heart", function() {
//   $(this).html(count += 1);
// });
