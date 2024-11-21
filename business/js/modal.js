export function initModals() {
    const buttons = document.querySelectorAll(".app__button");
    const modal = document.getElementById("contactModal");
    const span = document.querySelector(".modal__close");
    const thankYouModal = document.querySelector(".thank-you-modal");
    const closeModalButton = document.querySelector(".modal__close");
    const thankYouButton = document.querySelector(".thank-you-button");
    const thankYouClose = document.querySelector(".thank-you__close");

    // Функция для удаления затемнения
    function removeOverlay() {
        modal.classList.add("modal--hidden"); // Добавляем класс для прозрачного фона
    }

    // Функция для открытия модального окна
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.style.display = "flex";
            modal.classList.remove("modal--hidden"); // Убираем затемнение
        });
    });

    // Закрытие модального окна при нажатии на крестик
    span.addEventListener("click", () => {
        modal.style.display = "none";
        removeOverlay(); // Удаляем затемнение
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            removeOverlay(); // Удаляем затемнение
        }
    });

    // Закрытие окна благодарности
    [thankYouButton, thankYouClose].forEach((btn) => {
        btn.addEventListener("click", () => {
            thankYouModal.style.display = "none"; // Закрываем окно благодарности
            removeOverlay(); // Удаляем затемнение
        });
    });


}
