const data = {
  pn: {
    верх: [
      ["8:30–10:10", "Базы данных", "ауд. 123", "Бурбах В.В", [1, 2]],
      ["10:20–12:00", "Базы данных", "ауд. 123", "Бурбах В.В", [1, 2]],
      ["12:45–14:25", "Математическое моделирование", "ауд. 222", "Шаркова М.А", [1, 2]]
    ],
    низ: [
      ["8:30–10:10", "Архитектура аппаратных средств", "ауд. 226", "Андреев И.А", [1]],
      ["12:45–14:25", "Математическое моделирование", "ауд. 222", "Шаркова М.А", [2]]
    ]
  },

  vt: {
    верх: [
      ["10:20–12:00", "Английский язык", "ауд. 321", "п/г 1", [1]],
      ["12:45–14:25", "Разработка программных модулей", "ауд. 120", "п/г 1", [1]]
    ],
    низ: [
      ["12:45–14:25", "Английский язык", "ауд. 321", "п/г 2", [2]],
      ["14:35–16:15", "Разработка программных модулей", "ауд. 120", "", [2]]
    ]
  },

  sr: {
    верх: [
      ["10:20–12:00", "Теория вероятностей и статистика", "ауд. 222", "", [1, 2]],
      ["12:45–14:25", "Основы алгоритмизации и программирования", "ауд. 124", "", [1, 2]]
    ],
    низ: [
      ["8:30–10:10", "Математическое моделирование", "ауд. 222", "", [1]],
      ["10:20–12:00", "Теория вероятностей и статистика", "ауд. 222", "", [2]],
      ["16:35–18:05", "Архитектура аппаратных средств", "ауд. 226", "", [1, 2]],
      ["18:25–20:05", "Базы данных", "ауд. 123", "", [2]]
    ]
  },

  cht: {
    верх: [
      ["8:30–10:10", "ОАП", "ауд. 124", "", [1, 2]],
      ["14:35–16:15", "ОАП", "ауд. 124", "п/г 1", [1]]
    ],
    низ: [
      ["10:20–12:00", "Теория разработки ПО", "ауд. 124", "", [1, 2]],
      ["12:45–14:25", "Теория разработки ПО", "ауд. 124", "", [1, 2]],
      ["14:35–16:15", "ОАП", "ауд. 124", "п/г 2", [2]]
    ]
  },

  pt: {
    верх: [
      ["8:30–10:10", "Высшая математика", "ауд. 410", "", [1, 2]],
      ["10:20–12:00", "ОАП", "ауд. 124", "п/г 1", [1]],
      ["12:45–14:25", "Физическая культура", "спортзал", "", [1, 2]],
      ["14:35–16:15", "Теория вероятностей и статистика", "ауд. 222", "", [1, 2]]
    ],
    низ: [
      ["10:20–12:00", "Разработка программных модулей", "ауд. 120", "п/г 2", [2]],
      ["12:45–14:25", "Физическая культура", "спортзал", "", [1, 2]],
      ["14:35–16:15", "Теория вероятностей и статистика", "ауд. 222", "", [1, 2]]
    ]
  },

  sb: {
    верх: [
      ["8:30–9:30", "Разработка веб-приложений", "ауд. 226", "", [1, 2]],
      ["9:40–10:40", "Разработка веб-приложений", "ауд. 226", "", [1, 2]]
    ],
    низ: [
      ["9:40–10:40", "Разработка веб-приложений", "ауд. 226", "", [2]]
    ]
  }
};

// Состояние приложения
let currentDay = "pn";
let currentWeek = "верх"; // 'верх' или 'низ'
let selectedSubgroup = "all"; // 'all', '1', '2'

// Получение названия дня
function getDayName(dayCode) {
  const days = {
    pn: "Понедельник",
    vt: "Вторник",
    sr: "Среда",
    cht: "Четверг",
    pt: "Пятница",
    sb: "Суббота"
  };
  return days[dayCode] || dayCode;
}

// Рендер одного занятия
function renderLesson(lesson, weekType) {
  const [time, title, place, teacher, subgroups] = lesson;
  
  // Проверяем, нужно ли показывать для выбранной подгруппы
  if (selectedSubgroup !== "all" && !subgroups.includes(parseInt(selectedSubgroup))) {
    return "";
  }
  
  // Определяем цвет для левой полосы
  const barColors = {
    "верх": "#00ff7f",
    "низ": "#ff6b6b"
  };
  
  // Формируем информацию о подгруппах
  const subgroupInfo = subgroups.length === 2 ? "Обе подгруппы" : `Подгруппа ${subgroups[0]}`;
  
  return `
    <div class="lesson">
      <div class="bar" style="background: ${barColors[weekType]}"></div>
      <div class="lesson-content">
        <div class="time">
          ${time}
          <span class="week-badge">${weekType === 'верх' ? 'Верхняя' : 'Нижняя'}</span>
          <span class="subgroup-badge">${subgroupInfo}</span>
        </div>
        <div class="title">${title}</div>
        <div class="info">
          ${place ? `<span>📍 ${place}</span>` : ''}
          ${teacher ? `<span>👨‍🏫 ${teacher}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

// Рендер дня
function renderDay(day) {
  currentDay = day;
  const box = document.getElementById("schedule");
  const dayData = data[day];
  
  let html = `
    <div class="day-header">
      <h2>${getDayName(day)}</h2>
    </div>
  `;
  
  // Рендерим верхнюю неделю
  const upperLessons = dayData.верх.map(lesson => renderLesson(lesson, "верх")).join("");
  if (upperLessons) {
    html += `
      <div class="week-section">
        <h2>Верхняя неделя</h2>
        ${upperLessons}
      </div>
    `;
  }
  
  // Рендерим нижнюю неделю
  const lowerLessons = dayData.низ.map(lesson => renderLesson(lesson, "низ")).join("");
  if (lowerLessons) {
    html += `
      <div class="week-section">
        <h2>Нижняя неделя</h2>
        ${lowerLessons}
      </div>
    `;
  }
  
  // Если нет занятий для выбранной подгруппы
  if (!upperLessons && !lowerLessons) {
    html += `<div class="no-lessons">Нет занятий для выбранной подгруппы</div>`;
  }
  
  box.innerHTML = html;
  updateActiveDayButton();
}

// Обновление активной кнопки дня
function updateActiveDayButton() {
  document.querySelectorAll(".day-nav button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.day === currentDay);
  });
}

// Переключение недели
function toggleWeek() {
  currentWeek = currentWeek === "верх" ? "низ" : "верх";
  document.getElementById("currentWeek").textContent = 
    currentWeek === "верх" ? "Верхняя неделя" : "Нижняя неделя";
  
  // Анимация переключения
  const indicator = document.getElementById("currentWeek");
  indicator.style.transform = "scale(0.95)";
  setTimeout(() => {
    indicator.style.transform = "scale(1)";
  }, 150);
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  // Навешиваем клики на дни
  document.querySelectorAll(".day-nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      renderDay(btn.dataset.day);
    });
  });
  
  // Кнопка переключения недели
  document.getElementById("toggleWeek").addEventListener("click", toggleWeek);
  
  // Выбор подгруппы
  document.getElementById("subgroupSelect").addEventListener("change", (e) => {
    selectedSubgroup = e.target.value;
    renderDay(currentDay);
  });
  
  // Автовыбор текущей недели (можно сделать логику определения)
  const today = new Date();
  const weekNumber = Math.floor((today.getDate() - 1) / 7) + 1;
  currentWeek = weekNumber % 2 === 0 ? "низ" : "верх";
  
  document.getElementById("currentWeek").textContent = 
    currentWeek === "верх" ? "Верхняя неделя" : "Нижняя неделя";
  
  // Старт
  renderDay("pn");
});

// Автоматическое переключение дня
function autoSelectDay() {
  const days = ["pn", "vt", "sr", "cht", "pt", "sb"];
  const today = new Date().getDay(); // 0=воскресенье, 1=понедельник...
  
  // Преобразуем в наш формат (понедельник = 0)
  const adjustedDay = today === 0 ? 6 : today - 1;
  
  if (adjustedDay < 6 && data[days[adjustedDay]]) {
    renderDay(days[adjustedDay]);
  }
}

// Раскомментируйте для автоматического выбора текущего дня:
// document.addEventListener("DOMContentLoaded", autoSelectDay);