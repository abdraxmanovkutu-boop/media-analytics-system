document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "admin" && password === "12345") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
        window.location.href = "dashboard.html";
      } else {
        loginMessage.textContent = "Неверный логин или пароль";
        loginMessage.style.color = "red";
      }
    });
  }

  const isDashboard = window.location.pathname.includes("dashboard.html");
  if (isDashboard) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      window.location.href = "login.html";
      return;
    }

    const currentDate = document.getElementById("currentDate");
    if (currentDate) {
      const now = new Date();
      currentDate.textContent = now.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    createCharts();
  }
});

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  window.location.href = "login.html";
}

function createCharts() {
  const visitsChartCanvas = document.getElementById("visitsChart");
  const sectionsChartCanvas = document.getElementById("sectionsChart");

  if (visitsChartCanvas) {
    new Chart(visitsChartCanvas, {
      type: "line",
      data: {
        labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        datasets: [
          {
            label: "Посещаемость",
            data: [120, 190, 170, 220, 260, 210, 240],
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  }

  if (sectionsChartCanvas) {
    new Chart(sectionsChartCanvas, {
      type: "doughnut",
      data: {
        labels: ["Новости", "Статьи", "Видео", "Главная"],
        datasets: [
          {
            data: [30, 25, 20, 25],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
  }
}