// Функция для открытия модального окна с изображением игры
function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    modal.style.display = "flex";
    modalImage.src = imageSrc;
}

// Функция для закрытия модального окна
function closeModal(event) {
    const modal = document.getElementById("modal");
    const isCloseButton = event.target.classList.contains("close-button");
    // Проверяем, что клик был по пустой области вне содержимого модального окна или на кнопке закрытия
    if (event.target === modal || isCloseButton) {
        modal.style.display = "none";
    }
}

// Функция для управления отображением инструкции
function toggleInstruction() {
    const instructionContent = document.getElementById("instruction-content");
    if (instructionContent.style.display === "none") {
        instructionContent.style.display = "block";
    } else {
        instructionContent.style.display = "none";
    }
}



// Функция для отображения/скрытия инструкции
function toggleInstruction() {
    const instructionContent = document.getElementById("instruction-content");
    if (instructionContent.style.display === "none") {
        instructionContent.style.display = "block";
    } else {
        instructionContent.style.display = "none";
    }
}

// Функция для открытия модального окна с информацией
function openInfoModal() {
    document.getElementById("info-modal").style.display = "flex";
}

// Функция для закрытия модального окна с информацией
function closeInfoModal() {
    document.getElementById("info-modal").style.display = "none";
}

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    const infoModal = document.getElementById("info-modal");
    if (event.target === infoModal) {
        closeInfoModal();
    }
}