window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    burger__icon = document.querySelector('.burger__icon');

    burger__icon.addEventListener('click', () => {
        burger__icon.classList.toggle('burger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger__icon.classList.toggle('burger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})