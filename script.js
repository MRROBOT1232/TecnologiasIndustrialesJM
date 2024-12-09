document.addEventListener("DOMContentLoaded", () => {
    const btnLeft = document.getElementById("btn-left");
    const btnRight = document.getElementById("btn-right");
    const carruselContainer = document.querySelector(".carrusel-container");

    let offset = 0;
    const cardWidth = 320; // Ancho de cada tarjeta + margen

    btnLeft.addEventListener("click", () => {
        offset += cardWidth;
        if (offset > 0) {
            offset = -(carruselContainer.scrollWidth - cardWidth);
        }
        carruselContainer.style.transform = `translateX(${offset}px)`;
    });

    btnRight.addEventListener("click", () => {
        offset -= cardWidth;
        if (Math.abs(offset) >= carruselContainer.scrollWidth) {
            offset = 0;
        }
        carruselContainer.style.transform = `translateX(${offset}px)`;
    });
});

