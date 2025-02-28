document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const movingHeader = document.querySelector('.moving__header');
    const burgers = document.querySelectorAll('.header__burger');
    const mobileMenu = document.querySelector('.mobile__menu');
    
    let lastScroll = window.pageYOffset || 0;
    const scrollThreshold = window.innerHeight; // Conservez si vous souhaitez

    // Gestion du clic sur le burger
    burgers.forEach(burger => {
        burger.addEventListener('click', function() {
            // Basculer la classe 'active' sur tous les boutons burger
            burgers.forEach(bgr => bgr.classList.toggle('active'));
            mobileMenu.classList.toggle('active');

            if (mobileMenu.classList.contains('active')) {
                // Ouverture du menu mobile
                document.body.style.overflow = "hidden";
                movingHeader.classList.add('active');
                header.classList.add('hide');
            } else {
                // Fermeture du menu mobile
                header.classList.remove('hide');
                // IMPORTANT: on remet un overflow valable
                document.body.style.overflow = "auto"; 
                // ou: document.body.style.overflow = "";

                // Si le scroll est inférieur à 80px, on masque le movingHeader
                if (window.pageYOffset < 80) {
                    movingHeader.classList.remove('active');
                }
            }
        });
    });

    // Gestion du scroll
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || 0;
        // console.log(currentScroll);
        
      
        // Si le menu mobile est ouvert, on ne fait rien
        if (mobileMenu.classList.contains('active')) {
            lastScroll = currentScroll;
            return;
        }
      
        if (currentScroll < 80) {
            // Zone 1: < 80px => header principal
            movingHeader.classList.remove('active');
        } else if (currentScroll >= 80 && currentScroll <= scrollThreshold) {
            // Zone 2: entre 80px et window.innerHeight => on force le movingHeader
            movingHeader.classList.add('active');
        } else {
            // Zone 3: au-delà du seuil
            if (currentScroll < lastScroll) {
                // On remonte => afficher le movingHeader
                movingHeader.classList.add('active');
            } else {
                // On descend => masquer le movingHeader
                movingHeader.classList.remove('active');
                header.classList.remove('hide');
            }
        }
        lastScroll = currentScroll;
    });
});
