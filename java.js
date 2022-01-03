// $(document).ready(function(){

$(document).ready(function() {
    $(".Development").click(function(){
        $(".imgtwo").toggle();
        $(".paratwo").toggle();
    });
    })
    $(document).ready(function() {
        $(".Design").click(function(){
            $(".imgone").toggle();
            $(".paraone").toggle();
        });
    });
    $(document).ready(function() {
        $(".Management").click(function(){
            $(".imgthree").toggle();
            $(".parathree").toggle();
        });
    });
    $(document).ready(function(){
        $(".col").click(function(){
            $(".col").hover()
            element.onmouseover = function() {
                //Hovering
              }
        })
    })
  function sendMessage (){
     var name = document.getElementById("name").value; 
     var email = document.getElementById("email").value;
     var message = document.getElementById("message").value;
     var inputedName = validInput(); validEmail();  validMessage(); validName();
  }