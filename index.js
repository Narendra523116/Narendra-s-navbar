const navBarToggle = document.getElementById('navbar-toggle');

navBarToggle.addEventListener('click', () =>{
    const isSet = navBarToggle.getAttribute('aria-expanded') === 'true';
    navBarToggle.setAttribute('aria-expanded', !isSet);
})

const navbarMenu = document.querySelector('#navbar-menu');
const navbarLinksContainer = navbarMenu.querySelector('.navbar-links');

navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation());
navbarMenu.addEventListener('click', toggleNavbarVisibility);

