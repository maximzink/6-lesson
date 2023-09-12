const circles = document.querySelectorAll('.circle');

function applyAnimations() {
    circles.forEach(circle => {
        const animType = circle.getAttribute('data-anim');
        if (animType) {
            circle.classList.add(animType);
        }
    });
}

applyAnimations();