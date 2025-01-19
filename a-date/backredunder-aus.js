// Backunder Luck [AU/CA/UK/IE/NZ/US/ZA]
var back = 'https://a.vivawins.com/visit/efc684d5-deb4-47f4-a8e7-f382d3440bf3?track=BackButton';
var under = 'https://a.vivawins.com/visit/1fdc5092-6f41-4b22-8b2c-2fff99157b2b?track=Under';

if (typeof under !== "undefined" && under !== null) {
    document.addEventListener('click', function(event) {
        const target = event.target.closest('a'); // Современный подход
        if (target) {
            const linkHref = target.href;
            event.preventDefault();
            window.open(linkHref, '_blank'); // Открытие в новой вкладке
            window.location.replace(under);  // Замена текущей страницы
        }
    });
}

if (typeof back !== "undefined" && back !== null) {
    (function() {
        try {
            const URL = window.location.href.split(/[#]/)[0];
            for (let t = 0; t < 10; t++) history.pushState({}, '', URL + '#');
            window.onpopstate = function(event) {
                if (event.state) location.replace(back);
            };
        } catch (error) {
            console.error(error);
        }
    })();
}

// Redirect Function
function redirectAfterDelay() {
    const redirectUrl = "https://a.vivawins.com/click";
    setTimeout(() => {
        window.location.href = redirectUrl;
    }, 180000); // 3 минуты
}
window.addEventListener('load', redirectAfterDelay);