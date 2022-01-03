// $(document).ready(function(){

$(document).ready(function () {
    $(".Development").click(function () {
        $(".imgtwo").toggle();
        $(".paratwo").toggle();
    });
})
$(document).ready(function () {
    $(".Design").click(function () {
        $(".imgone").toggle();
        $(".paraone").toggle();
    });
});
$(document).ready(function () {
    $(".Management").click(function () {
        $(".imgthree").toggle();
        $(".parathree").toggle();
    });
});
$(document).ready(function () {
    $(".col").click(function () {
        $(".col").hover()
        element.onmouseover = function () {
            //Hovering
        }
    })
})
function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var inputedName = validName(); validEmail(); validMessage();

    function validName() {
        if (name == "") {
            alert("Enter name");
            return false;
        }
    }
    function validEmail(){
        if (email == "") {
            alert("Enter Email");
            return false;
        }

    }
    function validMessage(){
        if (message == "") {
            alert("Write a message");
            return true;
    
        }
    }
    alert("Thank you " + document.getElementById("name").value + ",We got your message");
};