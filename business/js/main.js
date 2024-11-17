import { initModals } from './modal.js';
import { initForm } from './form.js';
import { initPhoneMask } from './phone-mask.js';
import { initCookieConsent } from './cookies.js';
import { initBurgerMenu } from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
    initModals();
    initForm();
    initPhoneMask();
    initCookieConsent();
    initBurgerMenu();
});

