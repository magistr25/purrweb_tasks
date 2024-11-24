export function initBurgerMenu() {
    const burgerMenu = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('header__mobile-menu');
    const closeBtn = document.querySelector('.modal__close-btn');
    const headerButton = document.querySelector('.header__button'); // Кнопка Contact Sales

    function toggleMenuDisplay() {
        if (window.innerWidth >= 1440) {
            // Большие экраны: скрываем бургер-меню и показываем Contact Sales
            burgerMenu.style.display = 'none';
            headerButton.style.display = 'block';
        } else {
            // Маленькие экраны: показываем бургер-меню и скрываем Contact Sales
            burgerMenu.style.display = 'block';
            headerButton.style.display = 'none';
        }
    }

    // Вызываем функцию при загрузке страницы
    toggleMenuDisplay();

    // Отслеживаем изменения ширины экрана
    window.addEventListener('resize', toggleMenuDisplay);

    // Открытие мобильного меню
    burgerMenu.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    // Закрытие мобильного меню
    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
}


