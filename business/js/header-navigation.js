export function initNavigation() {
    const navItems = document.querySelectorAll('.header__nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(navItem => navItem.classList.remove('header__nav-item--selected'));
            item.classList.add('header__nav-item--selected');
        });
    });
}


