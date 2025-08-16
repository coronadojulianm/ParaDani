// Selección de elementos
const images = document.querySelectorAll(".grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxDesc = document.getElementById("lightbox-desc");
const closeBtn = document.querySelector(".close");

// Abrir lightbox al hacer clic en una imagen
images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxDesc.textContent = img.dataset.desc || "Sin descripción 💕";
  });
});

// Cerrar al hacer clic en la X
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Cerrar al hacer clic fuera de la imagen
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
