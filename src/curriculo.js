const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  
  const target = document.querySelectorAll('[data-animacao]');
  const animationClass = 'animar';

  function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.85);
    target.forEach(function(elemento) {
      if((windowTop) > elemento.offsetTop) {
        elemento.classList.add(animationClass);
      } else {
        elemento.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 100));
  }