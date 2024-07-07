const trade__form = document.getElementById("trade__form");
const trade__input = document.querySelector(".trade__input");
const trade__popup = document.querySelector(".trade__popup");

function showPopup() {
  trade__popup.style.display = "block";
  
  setTimeout(() => {
    trade__input.value = "";
    trade__popup.style.display = "none";
    
  }, 4000);
}

trade__form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (trade__input.value.trim().length === 0) {
    return;
  }
  showPopup();
});