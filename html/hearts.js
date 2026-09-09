// Corazones flotantes suaves (respeta prefers-reduced-motion)
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var container = document.querySelector('.hearts');
  if (!container || reduced) return;

  var GLYPHS = ['\u2764', '\u2764', '\u2763', '\u2661'];

  function spawn() {
    var h = document.createElement('span');
    h.className = 'heart-float';
    h.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    var dur = 9 + Math.random() * 9;
    h.style.left = Math.random() * 100 + 'vw';
    h.style.fontSize = (12 + Math.random() * 24) + 'px';
    h.style.animationDuration = dur + 's';
    h.style.opacity = (0.25 + Math.random() * 0.45).toFixed(2);
    container.appendChild(h);
    setTimeout(function () { h.remove(); }, dur * 1000);
  }

  for (var i = 0; i < 6; i++) setTimeout(spawn, i * 900);
  setInterval(spawn, 2200);
})();
