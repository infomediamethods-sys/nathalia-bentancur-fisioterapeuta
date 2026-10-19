/* movimento.js — movimento DESTE site, reproduzido do site de referência (Kit de Design, seção "Movimento").
   O construtor escreve aqui as entradas, hovers e comportamentos de rolagem que a referência tem, com
   IntersectionObserver + classes CSS (transform e opacity) e, quando precisar de posição de rolagem, window.aoRolar( ...).
   main.js e base.css não se editam. Tudo aqui respeita prefers-reduced-motion (ver base.css). */
(function () {
  'use strict';
  /* Pré-decodificação (revisão Armin, 19/10): depois do load, decodifica as fotos uma a uma em tempo ocioso,
     para a rolagem rápida não esbarrar na decodificação da imagem na hora em que ela entra na tela. */
  window.addEventListener('load', function () {
    var fila = Array.prototype.slice.call(document.images);
    var ocioso = window.requestIdleCallback || function (f) { return setTimeout(f, 200); };
    var proxima = function () {
      var img = fila.shift();
      if (!img) return;
      var seguir = function () { ocioso(proxima); };
      if (!img.complete || !img.naturalWidth) { img.addEventListener('load', function () { fila.unshift(img); ocioso(proxima); }, { once: true }); img.addEventListener('error', seguir, { once: true }); return; }
      if (img.decode) img.decode().then(seguir, seguir); else seguir();
    };
    ocioso(proxima);
  });
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
})();
