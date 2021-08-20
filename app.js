var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});
function toggleMenu() {
  const toggle = document.querySelector(".toggle");
  const navbar = document.querySelector(".navbar");

  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
}
