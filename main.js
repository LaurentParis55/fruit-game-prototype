const fruits = ["🍎", "🍌", "🍇", "🍓", "🍍", "🥝"];
let secretFruit = null;

const fruitsDiv = document.getElementById("fruits");
const message = document.getElementById("message");
const resetBtn = document.getElementById("reset");

function startGame() {
  secretFruit = fruits[Math.floor(Math.random() * fruits.length)];
  message.textContent = "Choisis un fruit";
  fruitsDiv.innerHTML = "";

  fruits.forEach(fruit => {
    const btn = document.createElement("button");
    btn.textContent = fruit;

    btn.onclick = () => {
      if (fruit === secretFruit) {
        message.textContent = "🎉 Gagné !";
      } else {
        message.textContent = "❌ Raté, essaie encore";
      }
    };

    fruitsDiv.appendChild(btn);
  });
}

resetBtn.onclick = startGame;

startGame();
