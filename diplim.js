const startBtn = document.getElementById("startBtn");
const visits = document.getElementById("visits");
const clicks = document.getElementById("clicks");
const users = document.getElementById("users");

let visitCount = 1240;
let clickCount = 3890;
let userCount = 312;

function animateValue(element, start, end, duration) {
  let startTimestamp = null;

  function step(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

window.addEventListener("load", () => {
  animateValue(visits, 0, visitCount, 1500);
  animateValue(clicks, 0, clickCount, 1800);
  animateValue(users, 0, userCount, 1200);
});

startBtn.addEventListener("click", () => {
  alert("Добро пожаловать в систему анализа пользовательской активности!");
});