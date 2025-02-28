document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll("[class*='delay-']");
    const backToTop = document.querySelector('.back-to-top');
    // console.log(animatedElements);
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 200) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
  
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Fonction utilitaire pour vérifier si un élément est dans la viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top < window.innerHeight && rect.bottom >= 0
      );
    }
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add("in-view");
          // console.log(entry.target);
          
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0
    });
  
    animatedElements.forEach(el => {
      // Si l'élément est déjà visible, on attend 2 secondes avant d'ajouter "in-view"
      if (isElementInViewport(el)) {
        setTimeout(() => {
          el.classList.add("in-view");
          console.log(el);
        }, 2500);
      } else {
        observer.observe(el);
      }
    });
  });