export function initCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptCookies');
    const declineButton = document.getElementById('declineCookies');
    const closeButton = document.querySelector('.cookie-consent__close');

    function hideCookieConsent() {
        cookieConsent.style.display = 'none';
    }

    acceptButton.addEventListener('click', hideCookieConsent);
    declineButton.addEventListener('click', hideCookieConsent);
    closeButton.addEventListener('click', hideCookieConsent);
}

