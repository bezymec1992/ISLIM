const searchForm = document.getElementById("search__form");
const headerInput = document.querySelector(".input");
const loader = document.querySelector(".loader");

function showLoader() {
  loader.style.display = "block";
  setTimeout(() => {
    headerInput.value = "";
    loader.style.display = "none";
  }, 2000);
}

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (headerInput.value.trim().length === 0) {
    return;
  }
  showLoader();
});
