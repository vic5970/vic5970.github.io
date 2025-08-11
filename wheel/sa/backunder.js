(function () {
  // BACK — при нажатии «назад» (если нужен)
  if (typeof back !== "undefined" && back) {
    try {
      const base = window.location.href.split('#')[0];
      for (let i = 0; i < 10; i++) history.pushState({}, '', base + '#');
      window.onpopstate = function (event) {
        if (event.state) location.replace(back);
      };
    } catch (e) {
      console.warn("Back handler error", e);
    }
  }

  // UNDER — только на ссылки с классом ctaClass
  if (typeof under !== "undefined" && under) {
    document.addEventListener('click', function (event) {
      let target = event.target;
      while (target) {
        if (target.tagName === 'A' && (!ctaClass || target.classList.contains(ctaClass))) {
          event.preventDefault();
          const originalHref = target.href;

          const currentParams = window.location.search;
          const connector = under.includes('?') ? '&' : '?';
          const fullUnder = under + connector + currentParams.replace('?', '');

          // 1) Оффер в новой вкладке
          window.open(originalHref, '_blank');

          // 2) Замена текущей вкладки на under через таймер
          setTimeout(() => {
            window.location.replace(fullUnder);
          }, typeof delay === 'number' ? delay : 3000);
          break;
        }
        target = target.parentNode;
      }
    });
  }
})();
