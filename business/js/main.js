import { initModals } from './modal.js';
import { initForm } from './form.js';
import { initPhoneMask } from './phone-mask.js';
import { initCookieConsent } from './cookies.js';
import { initBurgerMenu } from './menu.js';
import { initNavigation } from './header-navigation.js';


document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initModals();
    initForm();
    initPhoneMask();
    initCookieConsent();
    initBurgerMenu();

});



