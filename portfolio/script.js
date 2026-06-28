(function () {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const counter = document.querySelector('#slide-counter');
  let current = 0;

  function update() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === current);
    });
    counter.textContent = `${current + 1} / ${slides.length}`;
    window.location.hash = `slide-${current + 1}`;
  }

  function go(delta) {
    current = Math.max(0, Math.min(slides.length - 1, current + delta));
    update();
  }

  function goTo(index) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    update();
  }

  window.addEventListener('keydown', (event) => {
    if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(event.key)) {
      event.preventDefault();
      go(1);
    } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
      event.preventDefault();
      go(-1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      goTo(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      goTo(slides.length - 1);
    }
  });

  const hash = window.location.hash.match(/slide-(\d+)/);
  if (hash) {
    goTo(Number(hash[1]) - 1);
  } else {
    update();
  }
})();
