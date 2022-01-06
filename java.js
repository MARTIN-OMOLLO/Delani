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
            console.log(name)
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
// hover
$(document).ready(function(){
    $('#tone').mouseover(function(){
        $('#pwon').show();
    });
    $('#tone').mouseout(function(){
        $('#pwon').hide();
    });
});
$(document).ready(function(){
    $('#ttwo').mouseover(function(){
        $('#ptwo').show();
    });
    $('#ttwo').mouseout(function(){
        $('#ptwo').hide();
    });
});
$(document).ready(function(){
    $('#tthree').mouseover(function(){
        $('#pthree').show();
    });
    $('#tthree').mouseout(function(){
        $('#pthree').hide();
    });
});
$(document).ready(function(){
    $('#tfour').mouseover(function(){
        $('#pfour').show();
    });
    $('#tfour').mouseout(function(){
        $('#pfour').hide();
    });
});
$(document).ready(function(){
    $('#tfive').mouseover(function(){
        $('#pfive').show();
    });
    $('#tfive').mouseout(function(){
        $('#pfive').hide();
    });
});
$(document).ready(function(){
    $('#tfive').mouseover(function(){
        $('#pfive').show();
    });
    $('#tfive').mouseout(function(){
        $('#pfive').hide();
    });
});
$(document).ready(function(){
    $('#tsix').mouseover(function(){
        $('#psix').show();
    });
    $('#tsix').mouseout(function(){
        $('#psix').hide();
    });
});
$(document).ready(function(){
    $('#tseven').mouseover(function(){
        $('#pseven').show();
    });
    $('#tseven').mouseout(function(){
        $('#pseven').hide();
    });
});
$(document).ready(function(){
    $('#teight').mouseover(function(){
        $('#peight').show();
    });
    $('#teight').mouseout(function(){
        $('#peight').hide();
    });
});