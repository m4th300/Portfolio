// Désactive le scroll dès le début
document.body.style.overflow = 'hidden';

window.addEventListener('load', function() {
  const overlay = document.getElementById('transition-overlay');
  
  // Laisser l'overlay affiché pendant 2 secondes au chargement
  setTimeout(function() {
    overlay.classList.add('hide');
    
    // Après la fin de l'animation (0.5s), réactiver le scroll et retirer l'overlay si besoin
    setTimeout(function() {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
      // Optionnel : on peut laisser l'overlay dans le DOM en cas de prochaine transition,
      // ou le retirer et le recréer sur chaque page
      // overlay.parentNode.removeChild(overlay);
    }, 500);
  }, 2000);
  
  // Gestion du clic sur les liens du header pour déclencher la transition
  const headerLinks = document.querySelectorAll('header a');
  const btns = document.querySelectorAll('.btn');
  const arrowLinks = document.querySelectorAll('.arrow-link')

  const links = [...headerLinks, ...btns, ...arrowLinks];
  // console.log(links);
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // Si le lien pointe vers une ancre interne, ne pas lancer la transition
      if (link.getAttribute('href').startsWith('#')) return;
      
      e.preventDefault();
      const targetUrl = link.getAttribute('href');
      
      // Réactive le scroll pour que l'utilisateur ne soit pas bloqué pendant la transition
      document.body.style.overflowX = 'hidden';
      
      // Réinitialise l'overlay (si masqué) pour qu'il reparaisse
      overlay.classList.remove('hide', 'exit');
      // Forcer l'affichage de l'overlay
      overlay.style.transform = 'translateY(0)';
      overlay.style.opacity = '1';
      
      // On peut ajouter un petit délai pour lancer l'animation sortante (ici, glisser vers le haut)
      setTimeout(() => {
        overlay.classList.add('exit');
      }, 100);
      
      // Rediriger après l'animation (600ms environ)
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 600);
    });
  });
});
