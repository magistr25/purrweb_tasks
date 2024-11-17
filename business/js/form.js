export function initForm() {
    const form = document.querySelector(".modal__form");
    const submitButton = form.querySelector(".modal__submit");
    const thankYouModal = document.querySelector(".thank-you-modal");
    const modalContent = document.querySelector(".modal__content");
    const thankYouButton = document.querySelector(".thank-you-button");
    const thankYouClose = document.querySelector(".thank-you__close");

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        let hasError = false;

        // Проверяем обязательные поля
        const requiredFields = form.querySelectorAll('input[required]');
        requiredFields.forEach((field) => {
            const fieldContainer = field.closest('.modal__field');
            const errorMessage = fieldContainer.querySelector('.modal__error-message');

            // Удаляем старое сообщение об ошибке
            if (errorMessage) errorMessage.remove();

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

        // Если есть ошибки, показываем уведомление
        if (hasError) {
            const errorNotification = form.querySelector('.modal__error-notification');
            if (!errorNotification) {
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
                    form.appendChild(errorDiv); // Если .modal__policy нет, добавляем в конец формы
                }
            }

            // Увеличиваем высоту modal__content, если есть ошибки
            modalContent.style.height = "659px"; // Пример высоты для ошибок
            modalContent.classList.add("modal__content--error"); // CSS-класс для визуальных изменений
        } else {
            // Если ошибок нет
            form.style.display = "none";
            thankYouModal.style.display = "block";
            modalContent.style.display = "none";

            // Закрытие окна благодарности
            [thankYouButton, thankYouClose].forEach((btn) => {
                btn.addEventListener('click', () => {
                    thankYouModal.style.display = "none";
                    form.reset();
                    form.style.display = "block";
                });
            });
        }
    });
}
