const headerEL = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500){
        headerEL.classList.add('navbar-scrolled');
    } else if (window.scrollY < 500) {
        headerEL.classList.remove('navbar-scrolled')
    }
});
