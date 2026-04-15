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
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}

function setMetricsPeriod(period, btn) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(button => button.classList.remove("active"));
  btn.classList.add("active");

  const visitsValue = document.getElementById("visitsValue");
  const usersValue = document.getElementById("usersValue");
  const timeValue = document.getElementById("timeValue");
  const bounceValue = document.getElementById("bounceValue");
  const tableBody = document.getElementById("metricsTableBody");

  if (!visitsValue || !usersValue || !timeValue || !bounceValue || !tableBody) return;

  if (period === "day") {
    visitsValue.textContent = "2 450";
    usersValue.textContent = "1 284";
    timeValue.textContent = "4 мин 35 сек";
    bounceValue.textContent = "22%";

    tableBody.innerHTML = `
      <tr>
        <td>Главная</td>
        <td>2145</td>
        <td>986</td>
        <td>3 мин 40 сек</td>
        <td>18%</td>
      </tr>
      <tr>
        <td>Новости</td>
        <td>1982</td>
        <td>914</td>
        <td>4 мин 05 сек</td>
        <td>24%</td>
      </tr>
      <tr>
        <td>Статьи</td>
        <td>1654</td>
        <td>801</td>
        <td>5 мин 12 сек</td>
        <td>29%</td>
      </tr>
      <tr>
        <td>Видео</td>
        <td>1230</td>
        <td>642</td>
        <td>6 мин 02 сек</td>
        <td>31%</td>
      </tr>
    `;
  }

  if (period === "week") {
    visitsValue.textContent = "14 820";
    usersValue.textContent = "7 146";
    timeValue.textContent = "5 мин 02 сек";
    bounceValue.textContent = "19%";

    tableBody.innerHTML = `
      <tr>
        <td>Главная</td>
        <td>8421</td>
        <td>3940</td>
        <td>4 мин 01 сек</td>
        <td>20%</td>
      </tr>
      <tr>
        <td>Новости</td>
        <td>7168</td>
        <td>3375</td>
        <td>4 мин 26 сек</td>
        <td>26%</td>
      </tr>
      <tr>
        <td>Статьи</td>
        <td>5930</td>
        <td>2812</td>
        <td>5 мин 34 сек</td>
        <td>32%</td>
      </tr>
      <tr>
        <td>Видео</td>
        <td>4882</td>
        <td>2290</td>
        <td>6 мин 18 сек</td>
        <td>35%</td>
      </tr>
    `;
  }

  if (period === "month") {
    visitsValue.textContent = "58 430";
    usersValue.textContent = "24 910";
    timeValue.textContent = "5 мин 18 сек";
    bounceValue.textContent = "17%";

    tableBody.innerHTML = `
      <tr>
        <td>Главная</td>
        <td>28145</td>
        <td>11940</td>
        <td>4 мин 12 сек</td>
        <td>23%</td>
      </tr>
      <tr>
        <td>Новости</td>
        <td>24112</td>
        <td>10285</td>
        <td>4 мин 38 сек</td>
        <td>28%</td>
      </tr>
      <tr>
        <td>Статьи</td>
        <td>19876</td>
        <td>8530</td>
        <td>5 мин 48 сек</td>
        <td>34%</td>
      </tr>
      <tr>
        <td>Видео</td>
        <td>16304</td>
        <td>6912</td>
        <td>6 мин 25 сек</td>
        <td>37%</td>
      </tr>
    `;
  }
}
function logout() {
    window.location.href = "login.html";
}

function setCurrentDate() {
    const dateElement = document.getElementById("currentDate");
    if (dateElement) {
        const now = new Date();
        dateElement.textContent = now.toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    }
}

setCurrentDate();
function saveSettings() {
    alert("Настройки успешно сохранены.");
}

function resetSettings() {
    alert("Настройки были сброшены.");
}
console.log("Media Analytics System загружена успешно.");
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const errorMessage = document.getElementById("loginError");

            if (username === "admin" && password === "12345") {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "dashboard.html";
            } else {
                errorMessage.textContent = "Неверный логин или пароль.";
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();

    const protectedPages = [
        "dashboard.html",
        "metrics.html",
        "charts.html",
        "reports.html",
        "about.html",
        "settings.html",
        "users.html"
    ];

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (protectedPages.includes(currentPage) && isLoggedIn !== "true") {
        window.location.href = "login.html";
    }
});
function showUserName() {
    const userNameElement = document.getElementById("userNameDisplay");
    const storedUserName = localStorage.getItem("userName");

    if (userNameElement && storedUserName) {
        userNameElement.textContent = "Пользователь: " + storedUserName;
    }
}

showUserName();