document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cards");
  const likesCounter = document.querySelector(".likes-counter");
  const images = ["imgs/heart-white.svg", "imgs/heart-gray.svg"];
  const likesModal = document.querySelector('.likes__modal')
  const likesModalX = document.querySelector('.likes__modal-x');

  likesModalX.addEventListener('click', () => {
    likesModal.classList.remove('likes__modal-open')
  })

  let likes = 0;

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("heart")) {
        const isBuy = target.classList.toggle("buy");
        target.src = isBuy ? images[1] : images[0];

        likes += isBuy ? 1 : -1;
        likesCounter.style.display = likes > 0 ? "flex" : "none";
        likesCounter.textContent = likes;

        if (target.classList.contains("buy")) {
          likesModal.classList.add('likes__modal-open')
          
          setTimeout(() => {
            
            likesModal.classList.remove('likes__modal-open')
          }, 3000);
        }
      }
    });
  });
});


