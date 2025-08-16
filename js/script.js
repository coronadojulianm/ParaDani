
const images = document.querySelectorAll(".grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxDesc = document.getElementById("lightbox-desc");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxDesc.textContent = img.dataset.desc || "Sin descripción 💕";
  });
});
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
