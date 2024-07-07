const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});