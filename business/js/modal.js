export function initModals() {
    const buttons = document.querySelectorAll(".app__button");
    const modal = document.getElementById("contactModal");
    const span = document.querySelector(".modal__close");
    const facultativeButton = document.getElementById("facultative-button");
    const thankYouModal = document.querySelector(".thank-you-modal");
    const thankYouButton = document.querySelector(".modal__thank-you-button");
    const thankYouClose = document.querySelector(".thank-you__close");
    const form = document.querySelector('.modal__form');

    // Функция для удаления затемнения
    function removeOverlay() {
        modal.classList.add("modal--hidden");
    }

    // Функция для открытия модального окна
    function openModal() {
        modal.style.display = "flex";
        modal.classList.remove("modal--hidden");

        const modalContent = modal.querySelector(".modal__content");
        if (modalContent) {
            modalContent.style.display = "block";
        }

        if (facultativeButton) {
            facultativeButton.style.display = "none";
        }
    }

    // Функция для закрытия модального окна
    function closeModal() {
        modal.style.display = "none";
        removeOverlay();

        if (facultativeButton) {
            facultativeButton.style.display = "block";
        }
    }

    // Сброс всех состояний к начальному
    function resetAll() {
        // Скрыть окна
        modal.style.display = "none";
        thankYouModal.style.display = "none";

        // Сбросить форму
        if (form) {
            form.reset();
        }

        // Показать кнопку
        if (facultativeButton) {
            facultativeButton.style.display = "block";
        }

        // Удалить затемнение
        removeOverlay();
    }

    // Обработчик кнопок для открытия модального окна
    buttons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault(); // Отключаем стандартное поведение для ссылок
            openModal();
        });
    });

    // Закрытие модального окна при нажатии на крестик
    span.addEventListener("click", (event) => {
        event.preventDefault();
        closeModal();
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Закрытие окна благодарности
    function closeThankYouModal() {
        thankYouModal.style.display = "none";
        removeOverlay();

        if (facultativeButton) {
            facultativeButton.style.display = "block";
        }
    }

    // Обработчики для окна благодарности
    [thankYouButton, thankYouClose].forEach((btn) => {
        if (btn) {
            btn.addEventListener("click", (event) => {
                event.preventDefault();
                if (btn === thankYouButton) {
                    resetAll(); // Сброс всех состояний при клике на "Super!"
                } else {
                    closeThankYouModal(); // Закрыть окно благодарности
                }
            });
        }
    });

    // Обработчик отправки формы
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Отключаем стандартное поведение отправки формы
            // Закрыть модальное окно после отправки
            closeModal();

            // Показать окно благодарности
            if (thankYouModal) {
                thankYouModal.style.display = "flex";
            }
        });
    }
}
