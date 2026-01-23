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
let currentWeek = "верх";
let selectedSubgroup = "all";
let touchStartX = 0;
let touchEndX = 0;

// Массив дней для свайпа
const days = [
  { code: "pn", name: "Пн", full: "Понедельник" },
  { code: "vt", name: "Вт", full: "Вторник" },
  { code: "sr", name: "Ср", full: "Среда" },
  { code: "cht", name: "Чт", full: "Четверг" },
  { code: "pt", name: "Пт", full: "Пятница" },
  { code: "sb", name: "Сб", full: "Суббота" }
];

// Получение названия дня
function getDayName(dayCode) {
  const day = days.find(d => d.code === dayCode);
  return day ? day.full : dayCode;
}

// Создание карточек дней
function renderDayCards() {
  const container = document.getElementById('daysContainer');
  container.innerHTML = '';
  
  days.forEach(day => {
    const dayCard = document.createElement('div');
    dayCard.className = `day-card ${day.code === currentDay ? 'active' : ''}`;
    dayCard.dataset.day = day.code;
    dayCard.innerHTML = `
      <div class="day-name">${day.name}</div>
      <div class="day-date">${getDayNumber(day.code)}</div>
      <div class="day-full">${day.full}</div>
    `;
    
    dayCard.addEventListener('click', () => {
      selectDay(day.code);
    });
    
    container.appendChild(dayCard);
  });
}

// Получение номера дня (можно расширить для реальных дат)
function getDayNumber(dayCode) {
  const dayMap = { pn: 1, vt: 2, sr: 3, cht: 4, pt: 5, sb: 6 };
  return dayMap[dayCode] || '';
}

// Рендер одного занятия
function renderLesson(lesson, weekType) {
  const [time, title, place, teacher, subgroups] = lesson;
  
  // Проверяем подгруппу
  if (selectedSubgroup !== "all" && !subgroups.includes(parseInt(selectedSubgroup))) {
    return "";
  }
  
  const weekClass = weekType === 'верх' ? 'upper-week' : 'lower-week';
  const weekText = weekType === 'верх' ? 'ВЕРХНЯЯ' : 'НИЖНЯЯ';
  
  // Определяем подгруппы
  const subgroupText = subgroups.length === 2 ? 'Все подгруппы' : `Подгруппа ${subgroups[0]}`;
  
  return `
    <div class="lesson-card ${weekClass}">
      <div class="lesson-header">
        <div class="lesson-time">
          ${time}
          <span class="week-badge">${weekText}</span>
        </div>
        <div class="lesson-title">${title}</div>
      </div>
      <div class="lesson-content">
        ${place ? `
          <div class="lesson-detail">
            <i class="fas fa-map-marker-alt"></i>
            <span>${place}</span>
          </div>
        ` : ''}
        ${teacher ? `
          <div class="lesson-detail">
            <i class="fas fa-chalkboard-teacher"></i>
            <span>${teacher}</span>
          </div>
        ` : ''}
        <div class="subgroup-tag">${subgroupText}</div>
      </div>
    </div>
  `;
}

// Рендер дня
function renderDay(day) {
  currentDay = day;
  const box = document.getElementById("schedule");
  const dayData = data[day];
  
  // Обновляем заголовок
  document.getElementById('currentDay').innerHTML = `
    <i class="fas fa-calendar"></i>
    <span>${getDayName(day)}</span>
  `;
  
  // Обновляем активную карточку
  document.querySelectorAll('.day-card').forEach(card => {
    card.classList.toggle('active', card.dataset.day === day);
  });
  
  let html = '';
  
  // Рендерим только выбранную неделю для мобильных
  const lessons = dayData[currentWeek];
  
  if (lessons && lessons.length > 0) {
    const filteredLessons = lessons.filter(lesson => {
      if (selectedSubgroup === "all") return true;
      return lesson[4].includes(parseInt(selectedSubgroup));
    });
    
    if (filteredLessons.length > 0) {
      html = filteredLessons.map(lesson => renderLesson(lesson, currentWeek)).join('');
    } else {
      html = `
        <div class="no-lessons">
          <i class="fas fa-calendar-times"></i>
          <p>Нет занятий для выбранной подгруппы</p>
        </div>
      `;
    }
  } else {
    html = `
      <div class="no-lessons">
        <i class="fas fa-coffee"></i>
        <p>Сегодня пар нет! 🎉</p>
      </div>
    `;
  }
  
  box.innerHTML = html;
  updateSubgroupIndicator();
}

// Обновление индикатора подгруппы
function updateSubgroupIndicator() {
  const indicator = document.getElementById('subgroupIndicator');
  let text = '';
  
  if (selectedSubgroup === 'all') {
    text = 'Показываются занятия для всех подгрупп';
  } else {
    text = `Показываются занятия для ${selectedSubgroup}-й подгруппы`;
  }
  
  indicator.querySelector('span').textContent = text;
}

// Смена подгруппы
function setSubgroup(subgroup) {
  selectedSubgroup = subgroup;
  
  // Обновляем кнопки в меню
  document.querySelectorAll('.subgroup-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.subgroup === subgroup);
  });
  
  renderDay(currentDay);
}

// Смена недели
function setWeek(week) {
  currentWeek = week;
  
  // Обновляем кнопки в меню
  document.querySelectorAll('.week-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.week === week);
  });
  
  // Обновляем бейдж
  const badge = document.getElementById('currentWeekBadge');
  badge.innerHTML = `
    <i class="fas fa-layer-group"></i>
    <span>${week === 'верх' ? 'Верхняя' : 'Нижняя'} неделя</span>
  `;
  
  renderDay(currentDay);
}

// Выбор дня
function selectDay(day) {
  currentDay = day;
  renderDayCards();
  renderDay(day);
  
  // Закрываем меню если открыто
  closeMenu();
}

// Управление меню
function openMenu() {
  document.getElementById('mobileMenu').classList.add('active');
  document.getElementById('menuOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('active');
  document.getElementById('menuOverlay').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Автоматический выбор текущего дня
function selectToday() {
  const today = new Date().getDay(); // 0=воскресенье, 1=понедельник...
  const adjustedDay = today === 0 ? 6 : today - 1;
  
  if (adjustedDay < 6 && days[adjustedDay]) {
    selectDay(days[adjustedDay].code);
  }
}

// Определение текущей недели
function getCurrentWeek() {
  // Простая логика: чётные недели - верхняя, нечётные - нижняя
  const now = new Date();
  const startYear = new Date(now.getFullYear(), 0, 1);
  const daysPassed = Math.floor((now - startYear) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((daysPassed + startYear.getDay() + 1) / 7);
  
  return weekNumber % 2 === 0 ? 'низ' : 'верх';
}

// Обновление времени
function updateTime() {
  const now = new Date();
  const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                     now.getMinutes().toString().padStart(2, '0');
  document.getElementById('currentTime').textContent = timeString;
  
  // Обновляем следующий урок (упрощённая версия)
  const nextLessonInfo = getNextLesson();
  if (nextLessonInfo) {
    document.getElementById('nextLesson').textContent = `Следующее: ${nextLessonInfo}`;
  }
}

// Получение информации о следующем уроке
function getNextLesson() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  const dayData = data[currentDay];
  if (!dayData || !dayData[currentWeek]) return null;
  
  const lessons = dayData[currentWeek].filter(lesson => {
    if (selectedSubgroup !== "all" && !lesson[4].includes(parseInt(selectedSubgroup))) {
      return false;
    }
    
    const [timeRange] = lesson;
    const [startStr] = timeRange.split('–');
    const [hours, minutes] = startStr.split(':').map(Number);
    const startMinutes = hours * 60 + minutes;
    
    return startMinutes > currentMinutes;
  });
  
  if (lessons.length > 0) {
    const nextLesson = lessons[0];
    const [timeRange, title] = nextLesson;
    const [startStr] = timeRange.split('–');
    
    const [hours, minutes] = startStr.split(':').map(Number);
    const startMinutes = hours * 60 + minutes;
    const diffMinutes = startMinutes - currentMinutes;
    
    if (diffMinutes < 60) {
      return `через ${diffMinutes} мин`;
    } else {
      return `в ${startStr}`;
    }
  }
  
  return null;
}

// Инициализация
