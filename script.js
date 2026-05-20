// Функция расчета стоимости (Калькулятор)
function calculateTotal() {
    const tileTypeSelect = document.getElementById('tile-type');
    if (!tileTypeSelect) return;
    
    const pricePerMeter = parseFloat(tileTypeSelect.value);
    const areaInput = document.getElementById('tile-area');
    const area = areaInput ? parseFloat(areaInput.value) : 0;
    
    const total = pricePerMeter * (area > 0 ? area : 0);
    
    const totalPriceDiv = document.getElementById('total-price');
    if (totalPriceDiv) {
        totalPriceDiv.innerText = total.toFixed(2) + " €";
    }
}

// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ДЛЯ СЛАЙДЕРА
let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Убираем активный статус у текущего слайда и точки
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    // Считаем новый индекс
    currentIndex += direction;
    
    // Если ушли влево за первый слайд — перекидываем на последний
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    // Если ушли вправо за последний слайд — перекидываем на первый
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    
    // Включаем новый слайд и точку
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// Функция для клика по конкретной точке (dot)
function setCurrentSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    currentIndex = index;
    
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// Ждем загрузку страницы
document.addEventListener('DOMContentLoaded', () => {
    // Вешаем события на калькулятор
    const tileType = document.getElementById('tile-type');
    const tileArea = document.getElementById('tile-area');
    
    if(tileType) tileType.addEventListener('change', calculateTotal);
    if(tileArea) tileArea.addEventListener('input', calculateTotal);
    
    // Кнопка WhatsApp
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if(whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            alert("Здесь будет переход в ваш WhatsApp на номер +372...\nШаблон сообщения: 'Tere! Soovin tellida plaatimistööd...'");
        });
    }
    
    // Стартовый расчет калькулятора при запуске
    calculateTotal();
});