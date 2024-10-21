let slideIndex = 0;
tampilkanSlide();

function tampilkanSlide() {
  let i;
  let slides = document.getElementsByClassName("slide");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show");
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {slideIndex = 1}
  
  slides[slideIndex-1].classList.add('show');
  
  setTimeout(tampilkanSlide, 3000); // Ganti slide setiap 3 detik
}