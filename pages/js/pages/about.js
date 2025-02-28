window.addEventListener("load", function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    // Sélection de l'élément contenant la liste (ul.slider)
    const slider = document.querySelector('.slider');

    let Interval;

    // Fonction "nextSlide" qui fait avancer d'une diapo
    function nextSlide() {
    const items = document.querySelectorAll('.item');
    slider.append(items[0]);
    }

    // Fonction "prevSlide" qui recule d'une diapo
    function prevSlide() {
    const items = document.querySelectorAll('.item');
    slider.prepend(items[items.length - 1]);
    }

    prevButton.addEventListener("click", function() {
        prevSlide();
        clearInterval(Interval);
        Interval = setInterval(nextSlide, 4000);
    })

    nextButton.addEventListener("click", function() {
        nextSlide();
        clearInterval(Interval);
        Interval = setInterval(nextSlide, 4000);
    })

    Interval = setInterval(nextSlide, 4000);

})
