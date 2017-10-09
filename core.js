function changeSecurity() {
    count = 1;
    setInterval(function () {
        if (count == 1) {
            $('#security-f1').fadeToggle();
            $('#security-f2').hide();
            $('#security-f3').hide();
            $('#security-f4').hide();
        }
        if (count == 2) {
            $('#security-f2').fadeToggle();
            $('#security-f1').hide();
            $('#security-f3').hide();
            $('#security-f4').hide();
        }
        if (count == 3) {
            $('#security-f3').fadeToggle();
            $('#security-f1').hide();
            $('#security-f2').hide();
            $('#security-f4').hide();
        }
        if (count == 4) {
            $('#security-f4').fadeToggle();
            $('#security-f1').hide();
            $('#security-f2').hide();
            $('#security-f3').hide();
            count = 0;
        }
        count++;
    }, 3000);
}

function changeUsability() {
    count = 1;
    setInterval(function () {
        if (count == 1) {
            $('#usability-f1').fadeToggle();
            $('#usability-f2').hide();
            $('#usability-f3').hide();
            $('#usability-f4').hide();
        }
        if (count == 2) {
            $('#usability-f2').fadeToggle();
            $('#usability-f1').hide();
            $('#usability-f3').hide();
            $('#usability-f4').hide();
        }
        if (count == 3) {
            $('#usability-f3').fadeToggle();
            $('#usability-f1').hide();
            $('#usability-f2').hide();
            $('#usability-f4').hide();
        }
        if (count == 4) {
            $('#usability-f4').fadeToggle();
            $('#usability-f1').hide();
            $('#usability-f2').hide();
            $('#usability-f3').hide();
            count = 0;
        }
        count++;
    }, 3000);
}

function explore(where) {
    $('html, body').animate({
        scrollTop: $("#" + where).offset().top
    }, 1500);
}
$(document).ready($(function () {
    $("#get-started").hover(function () {
        $("#get-started").toggleClass("animated pulse infinite")
    }, function () {
        $("#get-started").toggleClass("animated pulse infinite")
    });
    $("#talk-button").hover(function () {
        $("#talk-button").toggleClass("animated pulse infinite")
    }, function () {
        $("#talk-button").toggleClass("animated pulse infinite")
    });
    
    $("#talk-button").click(function () {
        userlike.userlikeStartChat(); 
    });
    changeSecurity();
    changeUsability();
}));