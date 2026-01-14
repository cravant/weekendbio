// Popup logic
setTimeout(() => {
  document.getElementById("popup").style.display = "block";
}, 1200);

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Formspree AJAX (NO redirect)
const FORM_ENDPOINT = "https://formspree.io/f/mwvpgbnw";

function handleForm(form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = form.email.value;

    await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    document.getElementById("success-msg").style.display = "block";
    closePopup();
    form.reset();
  });
}

handleForm(document.getElementById("popup-form"));
handleForm(document.getElementById("newsletter-form"));

// Candle Animation
const canvas = document.getElementById("candlesCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 90; i++) {
    const x = Math.random() * canvas.width;
    const base = canvas.height * 0.7;
    const h = Math.random() * 90 + 20;
    ctx.fillStyle = Math.random() > 0.5 ? "#22c55e" : "#ef4444";
    ctx.fillRect(x, base - h, 6, h);
  }
  requestAnimationFrame(draw);
}
draw();
