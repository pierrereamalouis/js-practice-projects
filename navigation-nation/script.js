const [overlay, menuBars] = document.querySelectorAll('#overlay, #menu-bars');
const navs = document.querySelectorAll('#nav-1, #nav-2, #nav-3, #nav-4, #nav-5');

function navAnimationIn(nav, index) {
    nav.classList.remove(`slide-out-${index}`);
    nav.classList.add(`slide-in-${index}`);
}

function navAnimationOut(nav, index) {
    nav.classList.remove(`slide-in-${index}`);
    nav.classList.add(`slide-out-${index}`);
}

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');

    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');

        // Animate IN - Nav Items
        navs.forEach(navAnimationIn);
    } else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        
        // Animate Out - Nav Items
        navs.forEach(navAnimationOut);
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navs.forEach(nav => {
    nav.addEventListener('click', toggleNav);
});