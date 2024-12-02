const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
let slideInterval;
const slideDuration = 3000; // 3 seconds

// Function to update slider position
function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateDots(index);
}

// Update active dot
function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Next and Previous Buttons
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
});

// Dots Navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    });
});

// Auto Slide
function startAutoSlide() {
    slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
    }, slideDuration);
}

// Pause Auto Slide on Hover
function pauseAutoSlide() {
    clearInterval(slideInterval);
}

// Event Listeners
slides.addEventListener('mouseover', pauseAutoSlide);
slides.addEventListener('mouseout', startAutoSlide);

// Initialize Slider
showSlide(currentSlide);
startAutoSlide();
