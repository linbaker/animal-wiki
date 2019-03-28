//Front End

$(document).ready(function(){
  $("#selector").submit(function(event){
    var animalInput = $("#animal").val();
    // var animalOutput = selectAnimal(animalInput)

  function selectAnimal(animalInput){
    if (animalInput === "turtles"){
      $("#turtlesText").show();
    } else if (animalInput === "snakes"){
      $("#snakesText").show();
    } else if (animalInput === "insects"){
      $("#insectsText").show();
});

      event.preventDefault();
});

//Back End
