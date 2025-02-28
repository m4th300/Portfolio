window.addEventListener('load', function() {
    const bouncers = this.document.querySelectorAll('.bouncer');

    bouncers.forEach(bouncer => {
        const children = bouncer.children;
        console.log(children);

        const iconBounce = []

        for (let child of children) {
            if (child.tagName === "I") {  // Toujours en majuscules
                iconBounce.push(child);
            }
        }
        
        bouncer.addEventListener("mouseenter", function() {
            iconBounce.forEach(icon => {
                icon.classList.add("bounce");
            })
        })

        bouncer.addEventListener('mouseout', function() {
            iconBounce.forEach(icon => {
                icon.classList.remove("bounce");
            })
        })
    })
});