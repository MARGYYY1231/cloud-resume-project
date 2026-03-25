// =======================
// VISITOR COUNTER
// =======================
fetch("https://margaret-resume-api-dkc5e0dma0evd8ck.australiaeast-01.azurewebsites.net/api/getcounter")
  .then(res => res.json())
  .then(data => {
    document.getElementById("counter").innerText = data.views;
  })
  .catch(() => {
    document.getElementById("counter").innerText = "Error";
  });


// =======================
// SCROLL ANIMATION
// =======================
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => {
  observer.observe(card);
});


// =======================
// TOGGLE LIGHT/DARK MODE
// =======================
const toggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.body.classList.add(savedTheme);
  toggle.textContent = savedTheme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  toggle.textContent = isLight ? "🌙 Dark Mode" : "☀️ Light Mode";
});

// =======================
// PARTICLES BACKGROUND
// =======================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#38bdf8";
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

// =======================
// SKILL BAR ANIMATION
// =======================
// const skills = document.querySelectorAll(".progress");

// const skillObserver = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.style.width = entry.target.dataset.width;
//     }
//   });
// }, { threshold: 0.5 });

// skills.forEach(skill => skillObserver.observe(skill));