$(document).ready(function(){
      $("#form").submit(function(event){
          var age = $("input#ageInput").val();
          if(age >= 18){
            $("#infoOverAge").show();
          } else {
            $("#infoUnderAge").show();
          }
        event.preventDefault();
    });
});
