$(document).ready(function () {
    $('#overlay').click(function (e) {
        $('#modal01').removeClass('visible');
        $('.sweet-overlay').css('display', 'none');
        $('#spin').addClass('spinAround');
        $('#xmas').css('display', 'none');
        setTimeout(function () {
            $('#modal02').addClass('visible');
            $('.sweet-overlay2').css('display', 'block');
            $('#xmas').css('display', 'block');
            $('#xmas').css('top', 'calc(50% - 210px)');
            setTimeout(function () {
                $('#success02').addClass('animate');
                $('#successtip02').addClass('animateSuccessTip');
                $('#successlong02').addClass('animateSuccessLong');
            }, 500);
        }, 7500);
    });
});


$(document).ready(function () {
    $('#overlay2').click(function (e) {
        $('#modal02').removeClass('visible');
        $('#overlay2').css('display', 'none');
        $('#spin').addClass('spinAround2');
        $('#xmas').css('display', 'none');
        setTimeout(function () {
            $('#iphone').css('display', 'block');
        }, 7000);
        setTimeout(function () {
            $('#modal03').addClass('visible');
            $('.sweet-overlay3').css('display', 'block');
            $('#xmas').css('display', 'block');
            $('#xmas').css('top', 'calc(50% - 210px)');
            setTimeout(function () {
                $('#success03').addClass('animate');
                $('#successtip03').addClass('animateSuccessTip');
                $('#successlong03').addClass('animateSuccessLong');
            }, 500);
        }, 8000);
    });
});


function hidemodal01() {
    $('#modal01').removeClass('visible');
    $('.sweet-overlay').css('display', 'none');
    $('#spin').addClass('spinAround');
    $('#xmas').css('display', 'none');
    setTimeout(function () {
        $('#modal02').addClass('visible');
        $('.sweet-overlay2').css('display', 'block');
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
        $('.sweet-overlay3').css('display', 'block');
        $('#xmas').css('display', 'block');
        $('#xmas').css('top', 'calc(50% - 210px)');
        setTimeout(function () {
            $('#success03').addClass('animate');
            $('#successtip03').addClass('animateSuccessTip');
            $('#successlong03').addClass('animateSuccessLong');
        }, 500);
    }, 8000);
}


//Timer

window.onload = function () {
    document.getElementById("mins").innerHTML = 5;  // Set initial minutes
    document.getElementById("hsecs").innerHTML = "00";  // Set initial seconds
};


function countdown() {
    const minsElem = document.getElementById("mins");
    const secsElem = document.getElementById("hsecs");
    let mins = parseInt(minsElem.innerHTML);
    let secs = parseInt(secsElem.innerHTML);

    let nmins = mins;
    let nsecs = secs;

    if (mins !== 0 && secs === 0) {
        nmins = mins - 1;
        nsecs = 59;
    } else if (mins !== 0 || secs !== 0) {
        nsecs = secs - 1;
    }

    // Check for end of countdown and trigger redirection
    if (nmins === 0 && nsecs === 0) {
        goto();
    }

    minsElem.innerHTML = nmins;
    secsElem.innerHTML = nsecs < 10 ? "0" + nsecs : nsecs;
}

setInterval(countdown, 1000);

function goto() {
    location.href = 'https://a.vivawins.com/click';
}
