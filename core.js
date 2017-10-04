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

changeSecurity();
changeUsability();

$(document).scroll(function (e) {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 0) {
        console.log(scrollTop);
        $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
    }
    else {
        $('.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
    }
});