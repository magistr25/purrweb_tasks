export function initForm() {
    const form = document.querySelector(".modal__form");
    const submitButton = form.querySelector(".modal__submit");
    const thankYouModal = document.querySelector(".thank-you-modal");
    const modalContent = document.querySelector(".modal__content");
    const thankYouButton = document.querySelector(".modal__thank-you-button");
    const thankYouClose = document.querySelector(".thank-you__close");
    const phoneInput = document.getElementById('phone');

    // Закрытие окна благодарности
    const closeThankYou = () => {
        thankYouModal.style.display = "none";
        form.reset();
        form.style.display = "block";
        modalContent.style.display = "block";
    };

    [thankYouButton, thankYouClose].forEach((btn) =>
        btn.addEventListener('click', closeThankYou)
    );

    // Обработчик для отправки формы
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        let hasError = false;

        // Удаляем старые уведомления
        const errorNotification = form.querySelector('.modal__error-notification');
        if (errorNotification) errorNotification.remove();

        // Проверка обязательных полей
        const requiredFields = form.querySelectorAll('input[required]');
        requiredFields.forEach((field) => {
            const fieldContainer = field.closest('.modal__field');
            const errorMessage = fieldContainer.querySelector('.modal__error-message');

            // Удаляем старое сообщение об ошибке
            if (errorMessage) errorMessage.remove();

            // Проверяем на заполненность
            if (!field.value.trim()) {
                hasError = true;

                // Добавляем сообщение об ошибке
                const error = document.createElement('div');
                error.classList.add('modal__error-message');
                error.textContent = 'This field is required.';
                fieldContainer.appendChild(error);
                fieldContainer.classList.add('modal__field--error');
            } else {
                fieldContainer.classList.remove('modal__field--error');
            }
        });

        // Проверка номера телефона
        const phoneFieldContainer = phoneInput.closest('.modal__field');
        const phoneErrorMessage = phoneFieldContainer.querySelector('.modal__error-message');

        if (phoneErrorMessage) phoneErrorMessage.remove();

        const phoneRegex = /^\+7\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            hasError = true;

            // Добавляем сообщение об ошибке для телефона
            const error = document.createElement('div');
            error.classList.add('modal__error-message');
            error.textContent =
                'Please enter a valid phone number (+7 (XXX) XXX-XX-XX).';
            phoneFieldContainer.appendChild(error);
            phoneFieldContainer.classList.add('modal__field--error');
        } else {
            phoneFieldContainer.classList.remove('modal__field--error');
        }

        if (hasError) {
            // Показываем уведомление
            const errorDiv = document.createElement('div');
            errorDiv.classList.add('modal__error-notification');
            errorDiv.style.color = 'red';
            errorDiv.style.marginTop = '10px';
            errorDiv.style.marginBottom = '10px';
            errorDiv.style.fontSize = '16px';
            errorDiv.textContent = 'Please fill in all required fields';

            const policyElement = form.querySelector('.modal__policy');
            if (policyElement) {
                form.insertBefore(errorDiv, policyElement);
            } else {
                form.appendChild(errorDiv);
            }

            modalContent.classList.add("modal__content--error");
        } else {
            // Успешная отправка
            form.style.display = "none";
            thankYouModal.style.display = "block";
            modalContent.style.display = "none";
        }
    });

    // Реальная валидация в реальном времени
    const requiredFields = form.querySelectorAll('input[required]');
    requiredFields.forEach((field) => {
        field.addEventListener('input', () => {
            const fieldContainer = field.closest('.modal__field');
            const errorMessage = fieldContainer.querySelector('.modal__error-message');

            if (field.value.trim()) {
                // Убираем ошибку, если поле заполнено
                if (errorMessage) errorMessage.remove();
                fieldContainer.classList.remove('modal__field--error');
            } else {
                // Если поле снова пустое, добавляем ошибку
                if (!errorMessage) {
                    const error = document.createElement('div');
                    error.classList.add('modal__error-message');
                    error.textContent = 'This field is required.';
                    fieldContainer.appendChild(error);
                }
                fieldContainer.classList.add('modal__field--error');
            }
        });
    });

    // Валидация телефона в реальном времени
    phoneInput.addEventListener('input', () => {
        const phoneFieldContainer = phoneInput.closest('.modal__field');
        const phoneErrorMessage = phoneFieldContainer.querySelector('.modal__error-message');

        const phoneRegex = /^\+7\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/;

        // Убираем сообщение об ошибке, если пользователь продолжает ввод
        if (phoneErrorMessage) phoneErrorMessage.remove();
        phoneFieldContainer.classList.remove('modal__field--error');

        // Если пользователь закончил ввод, но номер некорректный
        phoneInput.addEventListener('blur', () => {
            if (!phoneRegex.test(phoneInput.value.trim())) {
                if (!phoneErrorMessage) {
                    const error = document.createElement('div');
                    error.classList.add('modal__error-message');

                    phoneFieldContainer.appendChild(error);
                }
                phoneFieldContainer.classList.add('modal__field--error');
            } else {
                if (phoneErrorMessage) phoneErrorMessage.remove();
                phoneFieldContainer.classList.remove('modal__field--error');
            }
        });
    });

}
