const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

if (yesBtn && noBtn && response) {
  yesBtn.addEventListener("click", () => {
    response.textContent = "YAY! You just made me the happiest person alive! 💕";
    yesBtn.textContent = "Best Valentine Ever 💗";
  });

  noBtn.addEventListener("mouseenter", () => {
    const x = Math.floor(Math.random() * 160) - 80;
    const y = Math.floor(Math.random() * 80) - 40;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  noBtn.addEventListener("click", () => {
    response.textContent = "Hmm... let's pretend you clicked yes 😄";
  });
}
