const [overlay, menuBars] = document.querySelectorAll('#overlay, #menu-bars');
const navItems = document.querySelectorAll('#nav-1, #nav-2, #nav-3, #nav-4, #nav-5');

// Control Navigation Animation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, index) => {
        nav.classList.replace(`slide-${direction1}-${index + 1}`, `slide-${direction2}-${index + 1}`);
    });
}

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');

    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');

        // Animate IN - Nav Items
        navAnimation('out', 'in');
    } else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        
        // Animate Out - Nav Items
        navAnimation('in', 'out');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach(nav => {
    nav.addEventListener('click', toggleNav);
});