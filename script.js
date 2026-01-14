// Popup
setTimeout(() => {
  document.getElementById("popup").style.display = "block";
}, 1400);

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Formspree (AJAX, no redirect)
const ENDPOINT = "https://formspree.io/f/mwvpgbnw";

function wireForm(form) {
  form.addEventListener("submit", async e => {
    e.preventDefault();
    await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email.value })
    });
    document.getElementById("success-msg").style.display = "block";
    closePopup();
    form.reset();
  });
}

wireForm(document.getElementById("popup-form"));
wireForm(document.getElementById("newsletter-form"));

/* ===== SMOOTH CANDLE CHART ===== */
const canvas = document.getElementById("chartCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const candles = [];
const candleWidth = 8;
const spacing = 18;
let offset = 0;

for (let i = 0; i < 120; i++) {
  candles.push({
    open: Math.random() * 100 + 100,
    close: Math.random() * 100 + 100,
    high: Math.random() * 120 + 140,
    low: Math.random() * 80 + 80
  });
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.translate(-offset, 0);

  candles.forEach((c, i) => {
    const x = i * spacing + canvas.width / 2;
    const mid = canvas.height * 0.6;
    const scale = 0.6;

    const openY = mid - c.open * scale;
    const closeY = mid - c.close * scale;
    const highY = mid - c.high * scale;
    const lowY = mid - c.low * scale;

    ctx.strokeStyle = "#38bdf8";
    ctx.beginPath();
    ctx.moveTo(x + candleWidth/2, highY);
    ctx.lineTo(x + candleWidth/2, lowY);
    ctx.stroke();

    ctx.fillStyle = c.close > c.open ? "#34d399" : "#ef4444";
    ctx.fillRect(
      x,
      Math.min(openY, closeY),
      candleWidth,
      Math.abs(openY - closeY) || 2
    );
  });

  ctx.setTransform(1,0,0,1,0,0);
  offset += 0.25;
  requestAnimationFrame(draw);
}

draw();
