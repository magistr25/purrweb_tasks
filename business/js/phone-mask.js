export const initPhoneMask = () => {
    const phoneInput = document.querySelector('input[type="tel"]');

    function maskPhone(event) {
        let input = event.target;
        let value = input.value.replace(/\D/g, '');

        if (value.startsWith("7")) {
            value = value.substring(1);
        }

        let formattedValue = "+7 (" + value.substring(0, 3);
        if (value.length > 3) formattedValue += ") " + value.substring(3, 6);
        if (value.length > 6) formattedValue += "-" + value.substring(6, 8);
        if (value.length > 8) formattedValue += "-" + value.substring(8, 10);

        input.value = formattedValue;
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', maskPhone);
        phoneInput.addEventListener('keydown', (event) => {
            if (!/[0-9]/.test(event.key) && !['Backspace', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
                event.preventDefault();
            }
        });
    }
};
