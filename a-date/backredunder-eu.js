// Backunder Luck [DK/FI/NO/SE] OFFER ADULT-DATING
var back = 'https://a.averantix.com/visit/5a58e058-c985-4634-82d4-dd97bef6b880?track=BackButton';
var under = 'https://a.averantix.com/visit/3dde9179-49f6-4f42-aeaf-b0a683cb04e7?track=Under';

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

