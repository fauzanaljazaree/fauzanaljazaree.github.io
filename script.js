// ========= Typewriter effect =========
const text = "Website under development...";
const headline = document.getElementById("headline");
let i = 0;
(function typeLetter(){
  if (i < text.length) {
    headline.textContent += text.charAt(i);
    i++;
    setTimeout(typeLetter, 120);
  }
})();

// ========= Star‑field background =========
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
let stars = [];

function initStars() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = [];
  for (let s = 0; s < 200; s++) {
    stars.push({
      x: Math.random() * canvas.width - canvas.width / 2,
      y: Math.random() * canvas.height - canvas.height / 2,
      z: Math.random() * canvas.width
    });
  }
}

function render() {
  ctx.fillStyle = "#0d0d0d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ffffff";
  for (const star of stars) {
    star.z -= 2;
    if (star.z <= 1) {
      star.z = canvas.width;
    }
    const k = 128 / star.z;
    const px = star.x * k + canvas.width / 2;
    const py = star.y * k + canvas.height / 2;
    if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
      const size = (1 - star.z / canvas.width) * 2;
      ctx.fillRect(px, py, size, size);
    }
  }
  requestAnimationFrame(render);
}

window.addEventListener("resize", initStars);
initStars();
render();
