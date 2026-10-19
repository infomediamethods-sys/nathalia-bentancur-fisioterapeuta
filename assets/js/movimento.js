/* movimento.js — movimento DESTE site, reproduzido do site de referência (Kit de Design, seção "Movimento").
   O construtor escreve aqui as entradas, hovers e comportamentos de rolagem que a referência tem, com
   IntersectionObserver + classes CSS (transform e opacity) e, quando precisar de posição de rolagem, window.aoRolar( ...).
   main.js e base.css não se editam. Tudo aqui respeita prefers-reduced-motion (ver base.css). */
(function () {
  'use strict';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
})();
