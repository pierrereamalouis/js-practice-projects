const toggleSwitch = document.querySelector('input[type="checkbox"]');
// const nav = document.getElementById('nav');
// const toggleIcon = document.getElementById('toggle-icon');
// const image1 = document.getElementById('image1');
// const image2 = document.getElementById('image2');
// const image3 = document.getElementById('image3');
// const textBox = document.getElementById('text-box');

// variables assignement refactor
const [nav, toggleIcon, image1, image2, image3, textBox] = document.querySelectorAll('#nav, #toggle-icon, #image1, #image2, #image3, #text-box');

// Object containing style options depending on light or dark mode
const toggleStyle = {
    dark: {
        navBackgroundColor: 'rgb(0 0 0 / 50%)',
        textBoxBackgroundColor: 'rgb(255 255 255 / 50%)',
        toggleIconTextContent:  'Light Mode',
        currentToggleIconClass: 'fa-sun',
        toggleIconClassToChangeFor: 'fa-moon',
    },
    light: {
        navBackgroundColor: 'rgb(255 255 255 / 50%)',
        textBoxBackgroundColor: 'rgb(0 0 0 / 50%)',
        toggleIconTextContent:  'Dark Mode',
        currentToggleIconClass: 'fa-moon',
        toggleIconClassToChangeFor: 'fa-sun',
    }
}

// // Dark Mode Styles
// function darkMode() {
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = ' rgb(255 255 255 / 50%)';
//     toggleIcon.children[0].textContent = 'Light Mode';
//     toggleIcon.children[1].classList.remove('fa-moon');
//     toggleIcon.children[1].classList.add('fa-sun');
//     image1.src = 'img/undraw_proud_coder_light.svg';
//     image2.src = 'img/undraw_feeling_proud_light.svg';
//     image3.src = 'img/undraw_conceptual_idea_light.svg';
// }

// // Light Mode Styles
// function lightMode() {
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     toggleIcon.children[1].classList.remove('fa-sun');
//     toggleIcon.children[1].classList.add('fa-moon');
//     image1.src = 'img/undraw_proud_coder_dark.svg';
//     image2.src = 'img/undraw_feeling_proud_dark.svg';
//     image3.src = 'img/undraw_conceptual_idea_dark.svg';
// }

// Refactored
// Toggle Mode styles
function toggleMode(mode) {
    nav.style.backgroundColor = toggleStyle[mode].navBackgroundColor;
    textBox.style.backgroundColor = toggleStyle[mode].textBoxBackgroundColor;
    toggleIcon.children[0].textContent = toggleStyle[mode].toggleIconTextContent;

    toggleIcon.children[1].classList.replace(toggleStyle[mode].currentToggleIconClass, toggleStyle[mode].toggleIconClassToChangeFor);

    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}



// Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleMode('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleMode('light');
    }
}
// Event Listner
toggleSwitch.addEventListener('change', switchTheme);


// Check Local Storage For Theme
// const currentTheme = localStorage.getItem('theme');
// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);
//     toggleMode(currentTheme);

//     if(currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }