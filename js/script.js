let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Función para cambiar de diapositiva
function moveSlide(direction) {
  slides[index].style.display = "none"; // Oculta la diapositiva actual
  index += direction;

  // Ajusta el índice para que sea circular
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  slides[index].style.display = "block"; // Muestra la nueva diapositiva
}

// Cambiar imagen automáticamente cada 5 segundos
setInterval(() => moveSlide(1), 5000);

const btnMenuOpen = document.getElementById("btnMenuOpen");
const btnMenuClose = document.getElementById("btnMenuClose");
const menuContent = document.getElementById("menuContent");
const enlaces = document.getElementById("enlaces");

// Abrir el menú
btnMenuOpen.addEventListener("click", () => {
  menuContent.classList.add("open");
});

// Cerrar el menú con el botón de cerrar
btnMenuClose.addEventListener("click", () => {
  menuContent.classList.remove("open");
});

// Cerrar el menú al hacer clic en cualquier enlace
enlaces.addEventListener("click", () => {
  menuContent.classList.remove("open");
});
