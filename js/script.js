let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function moveSlide(direction) {
  slides[index].style.display = "none";
  index += direction;
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  slides[index].style.display = "block";
}

// Cambiar imagen automáticamente cada 5 segundos
setInterval(() => moveSlide(1), 5000);
