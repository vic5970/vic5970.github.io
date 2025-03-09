$(document).ready(function () {
    $('#overlay').click(hidemodal01);
    $('#overlay2').click(hidemodal02);
});

function hidemodal01() {
    $('#modal01').removeClass('visible');
    $('.sweet-overlay').css('display', 'none');
    $('#spin').addClass('spinAround');
    $('#xmas').css('display', 'none');
    setTimeout(() => {
        $('#modal02').addClass('visible');
        $('.sweet-overlay2').css('display', 'block');
        $('#xmas').css({ display: 'block', top: 'calc(50% - 210px)' });
        setTimeout(() => {
            $('#success02').addClass('animate');
            $('#successtip02').addClass('animateSuccessTip');
            $('#successlong02').addClass('animateSuccessLong');
        }, 500);
    }, 7500);
}

function hidemodal02() {
    $('#modal02').removeClass('visible');
    $('.sweet-overlay2').css('display', 'none'); // Исправлено на sweet-overlay2
    $('#spin').addClass('spinAround2');
    $('#xmas').css('display', 'none');
    setTimeout(() => {
        $('#iphone').css('display', 'block');
    }, 7000);
    setTimeout(() => {
        $('#modal03').addClass('visible');
        $('.sweet-overlay3').css('display', 'block');
        $('#xmas').css({ display: 'block', top: 'calc(50% - 210px)' });
        setTimeout(() => {
            $('#success03').addClass('animate');
            $('#successtip03').addClass('animateSuccessTip');
            $('#successlong03').addClass('animateSuccessLong');
        }, 500);
    }, 8000);
}

// Timer
window.onload = function () {
    document.getElementById("mins").textContent = 2; // Используем textContent вместо innerHTML для безопасности
    document.getElementById("hsecs").textContent = "00";
};

function countdown() {
    const minsElem = document.getElementById("mins");
    const secsElem = document.getElementById("hsecs");
    let mins = parseInt(minsElem.textContent, 10);
    let secs = parseInt(secsElem.textContent, 10);

    let nmins = mins;
    let nsecs = secs;

    if (mins !== 0 && secs === 0) {
        nmins = mins - 1;
        nsecs = 59;
    } else if (mins !== 0 || secs !== 0) {
        nsecs = secs - 1;
    }

    // Проверка завершения таймера
    if (nmins === 0 && nsecs === 0) {
        goto();
        return; // Останавливаем таймер, если нужно
    }

    minsElem.textContent = nmins;
    secsElem.textContent = nsecs < 10 ? `0${nsecs}` : nsecs.toString();
}

// Используем setInterval и clearInterval для управления таймером
let timer = setInterval(countdown, 1000);

function goto() {
    clearInterval(timer); // Остановка таймера перед перенаправлением
    window.location.href = 'https://a.averantix.com/click';
}