//Front End

$(document).ready(function(){
  $("#selector").submit(function(event){
    var animalInput = $("#animal").val();
    var animalOutput = selectAnimal(animalInput)

    event.preventDefault();
  });

});


  function selectAnimal(animalInput){
    // debugger;
    if (animalInput === "turtles"){
      $(".turtlesText").show();
      $(".insectsText").hide()
      $(".snakesText").hide()
    } else if (animalInput === "snakes"){
      $(".snakesText").show();
      $(".insectsText").hide()
      $(".turtlesText").hide()
    } else if (animalInput === "insects"){
      $(".insectsText").show();
      $(".turtlesText").hide()
      $(".snakesText").hide()
    }
};

//Back End
