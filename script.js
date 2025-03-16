document.addEventListener("DOMContentLoaded", function (event) {
  let slides = document.querySelectorAll(".wrapper .slide");
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000);

  function nextSlide() {
    slides[currentSlide].className = "slide";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = "slide _showing";
  }
});
