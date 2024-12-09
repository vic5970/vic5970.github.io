function hidemodal01() {
    $('#modal01').removeClass('visible');
    $('.sweet-overlay').css('display', 'none');
    $('#spin').addClass('spinAround');
    $('#xmas').css('display', 'none');
    setTimeout(function () {
        $('#modal02').addClass('visible');
        $('.sweet-overlay').css('display', 'block');
        $('#xmas').css('display', 'block');
        $('#xmas').css('top', 'calc(50% - 210px)');
        setTimeout(function () {
            $('#success02').addClass('animate');
            $('#successtip02').addClass('animateSuccessTip');
            $('#successlong02').addClass('animateSuccessLong');
        }, 500);
    }, 7500);
}

function hidemodal02() {
    $('#modal02').removeClass('visible');
    $('.sweet-overlay').css('display', 'none');
    $('#spin').addClass('spinAround2');
    $('#xmas').css('display', 'none');
    setTimeout(function () {
        $('#iphone').css('display', 'block');
    }, 7000);
    setTimeout(function () {
        $('#modal03').addClass('visible');
        $('.sweet-overlay').css('display', 'block');
        $('#xmas').css('display', 'block');
        $('#xmas').css('top', 'calc(50% - 210px)');
        setTimeout(function () {
            $('#success03').addClass('animate');
            $('#successtip03').addClass('animateSuccessTip');
            $('#successlong03').addClass('animateSuccessLong');
        }, 500);
    }, 8000);
}

setInterval('countdown()', 1000);

function countdown() {
    var mins = parseInt(document.getElementById("mins").innerHTML);
    var secs = parseInt(document.getElementById("hsecs").innerHTML);
    if (mins !== 0 && secs === 0) {
        nmins = mins - 1;
        nsecs = 59;
    } else if (mins !== 0 || secs !== 0) {
        nmins = mins;
        nsecs = secs - 1;
    } else if (mins === 0 && secs === 0) {
        nmins = mins;
        nsecs = secs;
    }
    document.getElementById("mins").innerHTML = nmins;
    document.getElementById("hsecs").innerHTML = nsecs;
    if (nmins < 10) nmins = "0" + nmins;
    document.getElementById("mins").innerHTML = nmins;
    if (nsecs < 10) nsecs = "0" + nsecs;
    document.getElementById("hsecs").innerHTML = nsecs;
}