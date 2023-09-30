
const menu = document.getElementById("menu");


const mobileMenu = document.getElementById("mobile-menu");

document.addEventListener('click', (e) => {
    if (mobileMenu.contains(e.target)) {

        menu.classList.toggle('hidden');
        menu.classList.toggle('menu-expanded');
    } else {
        if (menu.classList.contains('menu-expanded')) {
            menu.classList.remove('menu-expanded')
            menu.classList.add('hidden');
        }
    }
})