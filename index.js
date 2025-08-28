
let count = 0;
  const cards = document.querySelectorAll(".card");
  const counter = document.getElementById("count");

  for (let card of cards) {
    card.onclick = function () {
      count++;
      counter.innerText = count;
      if (card.classList.contains("fa-heart")) {
        card.style.color = "red";
        
      }
    };
  }

