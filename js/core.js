var overlay = document.getElementById("overlay");

window.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("overlay").remove();
    }, 2000);
});

new WOW().init();

///////////////////////////////////////////////////////////

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var bars = document.getElementById("menu-toggle");
    var scrolled = Math.round((winScroll / height) * 100);
    //document.getElementById("myBar").style.width = scrolled + "%";
    // console.log(scrolled + '%');

    if (scrolled > 10) {
        document.getElementById("toggler").style.color = "black";
    }else {
        document.getElementById("toggler").style.color = "white";
    }
}

/////////////////////////////////////////////////////////////

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

var m = document.getElementById("wrapper");

$("#sidebar-wrapper").click(function (e) {
    if (m.classList.contains('toggled')) {                               //jquery Alt - $("#wrapper").hasClass("toggled")
        $("#wrapper").removeClass("toggled");
    }
});

$("section").click(function (e) {
    if (m.classList.contains('toggled')) {
        $("#wrapper").removeClass("toggled");
    }
});

$("footer").click(function(e){
    if(m.classList.contains("toggled")){
        $("#wrapper").removeClass("toggled");
    }
});


////////////////////////////////////////////////////////////

$(function () {
    $("#progressbar1").progressbar({
        value: 100
    });
    $('#progressbar1').height(10);
    $("#progressbar2").progressbar({
        value: 100
    });
    $('#progressbar2').height(10);
    $("#progressbar3").progressbar({
        value: 85
    });
    $('#progressbar3').height(10);
    $("#progressbar4").progressbar({
        value: 70
    });
    $('#progressbar4').height(10);

});

$('.skill-per').each(function () {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + "%");
});

//////////////////////////////////////////////////////////

$("form").on("submit", function () {
    alert("Form Submitted. Thank you");
    swal("Form Submitted", "Thank You", "success");
});

//////////////////////////////////////////////////////////