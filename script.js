// Obtener todos los elementos del carrusel
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

// Función para actualizar las imágenes
function updateCarousel() {
  // Asegurarse de que todas las imágenes tengan la clase 'active' o la pierdan
  images.forEach((img, index) => {
    if (index === currentIndex) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });

  // Desplazar las imágenes para mostrar la imagen activa
  const offset = -currentIndex * 100; // Mover el carrusel hacia la izquierda
  carouselImages.style.transform = `translateX(${offset}%)`;
}

// Función para ir a la imagen siguiente
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Avanzar al siguiente índice
  updateCarousel();
}

// Función para ir a la imagen anterior
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Retroceder al índice anterior
  updateCarousel();
}

// Event listeners para las flechas
document.querySelector('.right-arrow').addEventListener('click', nextImage);
document.querySelector('.left-arrow').addEventListener('click', prevImage);

// Inicializar el carrusel al cargar la página
updateCarousel();
