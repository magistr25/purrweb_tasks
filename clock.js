// Получаем элементы стрелок
const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

// Переменные для управления интервалом
let intervalId = null;

// Функция для обновления стрелок
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Расчет углов для стрелок
    const hourAngle = 30 * (hours % 12) + 0.5 * minutes; // Часовая стрелка с шагом в 0.5° на каждую минуту
    const minuteAngle = 6 * minutes; // Минутная стрелка с шагом в 6° на каждую минуту
    const secondAngle = 6 * seconds; // Секундная стрелка с шагом в 6° на каждую секунду

    // Установка углов с помощью transform
    hourHand.style.transform = `rotate(${-90 + hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${-90 + minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${-90 + secondAngle}deg)`;
}

// Функция для старта часов
function startClock() {
    if (!intervalId) {
        updateClock(); // Обновить сразу при старте
        intervalId = setInterval(() => {
            updateClock(); // Обновление стрелок каждую секунду
        }, 1000);
    }
}

// Функция для паузы часов
function pauseClock() {
    clearInterval(intervalId);
    intervalId = null;
}

// События на кнопках
document.getElementById('start').addEventListener('click', startClock);
document.getElementById('pause').addEventListener('click', pauseClock);

// Инициализация
updateClock();
