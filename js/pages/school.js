
// Fonction pour gérer l'affichage des overlays selon le niveau de scroll
function handleOverlayDisplay() {
    // Récupération du scroll vertical
    const scrollY = window.scrollY || window.pageYOffset;
  
    // Sélection des overlays
    const bottomOverlay = document.querySelector('.fade-overlay.bottom');
    const topOverlay = document.querySelector('.fade-overlay.top');
    // Afficher le overlay "bottom" si le scroll dépasse 200px, sinon le masquer
    if (bottomOverlay) {
      if (scrollY > window.innerHeight/3.3)
        bottomOverlay.classList.add("active")
      else 
        bottomOverlay.classList.remove("active")
    }
  
    // Afficher le overlay "top" si le scroll dépasse la hauteur d'une fenêtre, sinon le masquer
    if (topOverlay) {
      if (scrollY > window.innerHeight)
        topOverlay.classList.add("active")
      else 
        topOverlay.classList.remove("active")
    }
  }
  
  // Ajout de la gestion du scroll
  window.addEventListener('scroll', handleOverlayDisplay);
  
  // Optionnel : appel initial au cas où la page est chargée avec un scroll déjà présent
  handleOverlayDisplay();
  