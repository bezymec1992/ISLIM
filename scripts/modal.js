const burger = document.querySelector(".burger");
const body = document.body;
const overlay = document.querySelector(".layout");
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  body.classList.remove("open");
});

overlay.addEventListener("click", () => {
  body.classList.remove("open");
});

burger.addEventListener("click", () => {
  body.classList.add("open");
});
