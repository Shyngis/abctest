const carouselSlide = document.querySelector(".carousel-slide");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
const totalItems = carouselItems.length;
const itemsPerView = 3; // Number of images to show at once

function updateCarousel() {
  // Сдвиг карусели на нужное количество
  carouselSlide.style.transform = `translateX(-${
    currentIndex * (100 / itemsPerView)
  }%)`;

  // Обновление активных точек
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[Math.floor(currentIndex / itemsPerView)].classList.add("active");
}

// События для кнопок
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + itemsPerView) % totalItems;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - itemsPerView + totalItems) % totalItems;
  updateCarousel();
});

// События для точек
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    currentIndex = parseInt(e.target.getAttribute("data-index")) * itemsPerView;
    updateCarousel();
  });
});

// Инициализация карусели
updateCarousel();
