const schedule = {
  pn: {
    верх: [
      ["8:30–10:10", "Основы проектирования баз данных", "ауд. 123", "Бурбах Владимир Витальевич", [1, 2]],
      ["10:20–12:00", "Основы проектирования баз данных", "ауд. 123", "Бурбах Владимир Витальевич", [1, 2]],
      ["12:45–14:25", "Математическое моделирование", "ауд. 222", "Шаркова Мария Александровна", [1, 2]]
    ],
    низ: [
      ["8:30–10:10", "Архитектура аппаратных средств", "ауд. 226", "Андреев Игорь Алексеевич", [1, 2]],
      ["10:20–12:00", "Основы проектирования баз данных", "ауд. 123", "Бурбах Владимир Витальевич", [1, 2]],
      ["12:45–14:25", "Математическое моделирование", "ауд. 222", "Шаркова Мария Александровна", [1, 2]]
    ]
  },

  vt: {
    верх: [
      ["10:20–12:00", "Английский язык", "ауд. 321", "Кручинина Ольга Анатольевна", [1]],
      ["12:45–14:25", "Разработка программных модулей", "ауд. 120", "Сазонова Н.В.", [1]],
      ["12:45–14:25", "Английский язык", "ауд. 321", "Кручинина Ольга Анатольевна", [2]]
    ],
    низ: [
      ["10:20–12:00", "Английский язык", "ауд. 321", "Кручинина Ольга Анатольевна", [1]],
      ["12:45–14:25", "Разработка программных модулей", "ауд. 120", "Сазонова Н.В.", [1]],
      ["12:45–14:25", "Английский язык", "ауд. 321", "Кручинина Ольга Анатольевна", [2]],
      ["14:35–16:15", "Разработка программных модулей", "ауд. 120", "Сазонова Н.В.", [1, 2]]
    ]
  },

  sr: {
    верх: [
      ["10:20–12:00", "Теория вероятностей и статистика", "ауд. 222", "Шаркова Мария Александровна", [1, 2]],
      ["12:45–14:25", "Основы алгоритмизации и программирования", "ауд. 124", "Егорова Ольга Викторовна", [1, 2]],
      ["14:35–16:15", "Архитектура аппаратных средств", "ауд. 226", "Андреев Игорь Алексеевич", [1, 2]],
      ["16:35–18:05", "Основы проектирования баз данных", "ауд. 123", "Бурбах Владимир Витальевич", [1, 2]]
    ],
    низ: [
      ["8:30–10:10", "Математическое моделирование", "ауд. 222", "Шаркова Мария Александровна", [1, 2]],
      ["10:20–12:00", "Теория вероятностей и статистика", "ауд. 222", "Шаркова Мария Александровна", [1, 2]],
      ["14:35–16:15", "Основы проектирования баз данных", "ауд. 123", "Бурбах Владимир Витальевич", [1, 2]]
    ]
  },

  cht: {
    верх: [
      ["8:30–10:10", "Основы алгоритмизации и программирования", "ауд. 124", "Егорова Ольга Викторовна", [2]],
      ["10:20–12:00", "Теории разработки ПО", "ауд. 124", "Егорова Ольга Викторовна", [1, 2]],
      ["12:45–14:25", "Теории разработки ПО", "ауд. 124", "Егорова Ольга Викторовна", [1, 2]],
      ["14:35–16:15", "Основы алгоритмизации и программирования", "ауд. 124", "Егорова Ольга Викторовна", [1]]
    ],
    низ: [
      ["8:30–10:10", "Основы алгоритмизации и программирования", "ауд. 124", "Егорова Ольга Викторовна", [2]],
      ["10:20–12:00", "Теории разработки ПО", "ауд. 124", "Егорова Ольга Викторовна", [1, 2]],
      ["12:45–14:25", "Теории разработки ПО", "ауд. 124", "Егорова Ольга Викторовна", [1, 2]],
      ["14:35–16:15", "Основы алгоритмизации и программирования", "ауд. 124", "Егорова Ольга Викторовна", [2]]
    ]
  },

  pt: {
    верх: [
      ["8:30–10:10", "Высшая математика", "ауд. 410", "Ширина Тамара Сергеевна", [1, 2]],
      ["10:20–12:00", "Основы алгоритмизации и программирования", "ауд. 124", "Егорова Ольга Викторовна", [1]],
      ["10:20–12:00", "Разработка программных модулей", "ауд. 120", "Сазонова Н.В.", [2]],
      ["12:45–14:25", "Физическая культура", "спортзал", "Иванов Николай Николаевич", [1, 2]],
      ["14:35–16:15", "Теория вероятностей и статистика", "ауд. 222", "Шаркова Мария Александровна", [1, 2]]
    ],
    низ: [
      ["8:30–10:10", "Высшая математика", "ауд. 410", "Ширина Тамара Сергеевна", [1, 2]],
      ["10:20–12:00", "Основы алгоритмизации и программирования", "ауд. 124", "Егорова Ольга Викторовна", [1]],
      ["10:20–12:00", "Разработка программных модулей", "ауд. 120", "Сазонова Н.В.", [2]],
      ["12:45–14:25", "Физическая культура", "спортзал", "Иванов Николай Николаевич", [1, 2]],
      ["14:35–16:15", "Теория вероятностей и статистика", "ауд. 222", "Шаркова Мария Александровна", [1, 2]]
    ]
  },

  sb: {
    верх: [
      ["8:30–9:30", "Разработка веб-приложений", "ауд. 226", "Афанасаева Инга Артуровна", [1, 2]],
      ["9:40–10:40", "Разработка веб-приложений", "ауд. 226", "Афанасаева Инга Артуровна", [1, 2]]
    ],
    низ: [
      ["9:40–10:40", "Разработка веб-приложений", "ауд. 226", "Афанасаева Инга Артуровна", [1, 2]]
    ]
  }
};

// Состояние приложения
let currentDay = "pn";
let currentWeek = "верх";
let selectedSubgroup = "all";
let touchStartX = 0;
let touchEndX = 0;

// Дни недели
const days = [
  { code: "pn", short: "Пн", name: "Понедельник", number: 1 },
  { code: "vt", short: "Вт", name: "Вторник", number: 2 },
  { code: "sr", short: "Ср", name: "Среда", number: 3 },
  { code: "cht", short: "Чт", name: "Четверг", number: 4 },
  { code: "pt", short: "Пт", name: "Пятница", number: 5 },
  { code: "sb", short: "Сб", name: "Суббота", number: 6 }
];

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM загружен, запускаем приложение...');
  
  try {
    initApp();
  } catch (error) {
    console.error('Ошибка при инициализации:', error);
    showError('Ошибка загрузки приложения');
  }
});

function initApp() {
  // Скрываем индикатор загрузки
  document.getElementById('loadingIndicator').style.display = 'none';
  
  // Инициализируем дни недели
  initDays();
  
  // Инициализируем отображение даты
  updateDateDisplay();
  
  // Инициализируем отображение недель
  updateWeekDisplay();
  
  // Инициализируем подгруппу
  updateSubgroupDisplay();
  
  // Инициализируем время
  updateTime();
  setInterval(updateTime, 60000); // Обновляем каждую минуту
  
  // Назначаем обработчики событий
  setupEventListeners();
  
  // Рендерим начальный день
  renderDay(currentDay);
  
  console.log('Приложение успешно инициализировано');
}

function initDays() {
  const daysContainer = document.getElementById('daysScroll');
  daysContainer.innerHTML = '';
  
  days.forEach(day => {
    const dayTab = document.createElement('div');
    dayTab.className = `day-tab ${day.code === currentDay ? 'active' : ''}`;
    dayTab.dataset.day = day.code;
    dayTab.innerHTML = `
      <div class="day-short">${day.short}</div>
      <div class="day-number">${day.number}</div>
    `;
    
    dayTab.addEventListener('click', () => {
      selectDay(day.code);
    });
    
    daysContainer.appendChild(dayTab);
  });
  
  // Добавляем свайп для дней
  setupSwipe(daysContainer);
}

function setupSwipe(container) {
  container.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  });
  
  container.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  });
}

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    const currentIndex = days.findIndex(d => d.code === currentDay);
    
    if (diff > 0 && currentIndex < days.length - 1) {
      // Свайп влево - следующий день
      selectDay(days[currentIndex + 1].code);
    } else if (diff < 0 && currentIndex > 0) {
      // Свайп вправо - предыдущий день
      selectDay(days[currentIndex - 1].code);
    }
  }
}

function selectDay(dayCode) {
  if (!schedule[dayCode]) return;
  
  currentDay = dayCode;
  
  // Обновляем активную вкладку
  document.querySelectorAll('.day-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.day === dayCode);
  });
  
  // Обновляем отображение дня
  updateDateDisplay();
  
  // Рендерим расписание
  renderDay(dayCode);
  
  // Прокручиваем к активной вкладке
  scrollToActiveDay();
}

function scrollToActiveDay() {
  const activeTab = document.querySelector('.day-tab.active');
  if (activeTab) {
    activeTab.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
}

function updateDateDisplay() {
  const day = days.find(d => d.code === currentDay);
  if (!day) return;
  
  const now = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const dateString = now.toLocaleDateString('ru-RU', options);
  
  document.getElementById('currentDate').innerHTML = `
    <i class="fas fa-calendar-day"></i>
    <span>${day.name}, ${dateString.split(',')[1]}</span>
  `;
}

function updateWeekDisplay() {
  const nextWeek = getNextWeek(currentWeek);
  
  document.getElementById('currentWeekMobile').textContent = 
    currentWeek === 'верх' ? 'Верхняя' : 'Нижняя';
  
  document.getElementById('nextWeekMobile').textContent = 
    nextWeek === 'верх' ? 'Верхняя' : 'Нижняя';
}

function updateSubgroupDisplay() {
  const text = selectedSubgroup === 'all' 
    ? 'Показываются все подгруппы'
    : `Показывается ${selectedSubgroup}-я подгруппа`;
  
  document.querySelector('#activeSubgroup span').textContent = text;
}

function getNextWeek(current) {
  return current === "верх" ? "низ" : "верх";
}

function renderDay(day) {
  console.log(`Рендерим день: ${day}, неделя: ${currentWeek}`);
  
  const box = document.getElementById('schedule');
  const dayData = schedule[day];
  
  if (!dayData) {
    box.innerHTML = `
      <div class="no-lessons">
        <i class="fas fa-exclamation-circle"></i>
        <p>Нет данных для этого дня</p>
      </div>
    `;
    return;
  }
  
  const currentWeekLessons = dayData[currentWeek] || [];
  
  let html = '';
  
  if (currentWeekLessons.length === 0) {
    html = `
      <div class="no-lessons">
        <i class="fas fa-coffee"></i>
        <p>На этой неделе нет занятий! 🎉</p>
      </div>
    `;
  } else {
    // Фильтруем по подгруппе
    const filteredLessons = currentWeekLessons.filter(lesson => {
      if (selectedSubgroup === "all") return true;
      return lesson[4].includes(parseInt(selectedSubgroup));
    });
    
    if (filteredLessons.length === 0) {
      html = `
        <div class="no-lessons">
          <i class="fas fa-user-slash"></i>
          <p>Нет занятий для ${selectedSubgroup === 'all' ? 'всех подгрупп' : 'подгруппы ' + selectedSubgroup}</p>
        </div>
      `;
    } else {
      // Сортируем по времени
      filteredLessons.sort((a, b) => {
        const timeA = a[0].split('–')[0].replace(':', '');
        const timeB = b[0].split('–')[0].replace(':', '');
        return parseInt(timeA) - parseInt(timeB);
      });
      
      html = filteredLessons.map(lesson => renderLesson(lesson)).join('');
    }
  }
  
  box.innerHTML = html;
  updateNextLessonInfo();
}

function renderLesson(lesson) {
  const [time, title, place, teacher, subgroups] = lesson;
  const weekClass = currentWeek === 'верх' ? 'upper-week' : 'lower-week';
  const weekText = currentWeek === 'верх' ? 'ВЕРХНЯЯ' : 'НИЖНЯЯ';
  
  const subgroupText = subgroups.length === 2 
    ? 'Все подгруппы' 
    : `Подгруппа ${subgroups[0]}`;
  
  return `
    <div class="lesson-card ${weekClass}">
      <div class="lesson-header">
        <div class="lesson-time">
          ${time}
          <span class="week-indicator-badge">${weekText}</span>
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

function updateTime() {
  const now = new Date();
  const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                     now.getMinutes().toString().padStart(2, '0');
  document.getElementById('currentTime').textContent = timeString;
}

function updateNextLessonInfo() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  const dayData = schedule[currentDay];
  if (!dayData || !dayData[currentWeek]) return;
  
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
  
  const nextLessonInfo = document.getElementById('nextLessonInfo');
  
  if (lessons.length > 0) {
    const nextLesson = lessons[0];
    const [timeRange, title] = nextLesson;
    const [startStr] = timeRange.split('–');
    
    const [hours, minutes] = startStr.split(':').map(Number);
    const startMinutes = hours * 60 + minutes;
    const diffMinutes = startMinutes - currentMinutes;
    
    if (diffMinutes < 60) {
      nextLessonInfo.innerHTML = `
        <i class="fas fa-arrow-right"></i>
        <span>Следующая пара: через ${diffMinutes} мин</span>
      `;
    } else {
      nextLessonInfo.innerHTML = `
        <i class="fas fa-arrow-right"></i>
        <span>Следующая пара: в ${startStr}</span>
      `;
    }
  } else {
    nextLessonInfo.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <span>Пар больше нет сегодня</span>
    `;
  }
}

function setupEventListeners() {
  // Кнопка переключения недели
  document.getElementById('toggleWeekMobile').addEventListener('click', () => {
    currentWeek = getNextWeek(currentWeek);
    updateWeekDisplay();
    renderDay(currentDay);
    showNotification(`Переключено на ${currentWeek === 'верх' ? 'верхнюю' : 'нижнюю'} неделю`);
  });
  
  // Кнопка "Сегодня"
  document.getElementById('todayBtn').addEventListener('click', () => {
    const today = new Date().getDay();
    const adjustedDay = today === 0 ? 6 : today - 1;
    
    if (adjustedDay < 6 && days[adjustedDay]) {
      selectDay(days[adjustedDay].code);
      showNotification('Переход на сегодняшний день');
    }
  });
  
  // Кнопка меню настроек
  document.getElementById('menuToggle').addEventListener('click', openMenu);
  document.getElementById('closeMenu').addEventListener('click', closeMenu);
  document.getElementById('menuOverlay').addEventListener('click', closeMenu);
  
  // Кнопка фильтра
  document.getElementById('filterBtn').addEventListener('click', openMenu);
  
  // Плавающая кнопка
  document.getElementById('floatingActionBtn').addEventListener('click', () => {
    selectDay('pn');
    showNotification('Переход на понедельник');
  });
  
  // Выбор подгруппы в меню
  document.querySelectorAll('.sub-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const subgroup = btn.dataset.subgroup;
      selectedSubgroup = subgroup;
      
      // Обновляем кнопки в меню
      document.querySelectorAll('.sub-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.subgroup === subgroup);
      });
      
      // Обновляем отображение
      updateSubgroupDisplay();
      renderDay(currentDay);
      
      showNotification(`Показывается ${subgroup === 'all' ? 'все подгруппы' : subgroup + '-я подгруппа'}`);
      closeMenu();
    });
  });
}

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

function showNotification(text) {
  const notification = document.getElementById('notification');
  const notificationText = document.getElementById('notificationText');
  
  notificationText.textContent = text;
  notification.classList.add('show');
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

function showError(message) {
  const box = document.getElementById('schedule');
  box.innerHTML = `
    <div class="no-lessons">
      <i class="fas fa-exclamation-triangle"></i>
      <p>${message}</p>
      <p style="margin-top: 10px; font-size: 0.9rem;">Попробуйте перезагрузить страницу</p>
    </div>
  `;
}

// Автоматическое определение текущей недели
function getCurrentWeek() {
  const today = new Date();
  const weekNumber = Math.floor((today.getDate() - 1) / 7) + 1;
  return weekNumber % 2 === 0 ? "низ" : "верх";
}

// Автоматический выбор текущего дня при загрузке
function autoSelectToday() {
  const today = new Date().getDay();
  const adjustedDay = today === 0 ? 6 : today - 1;
  
  if (adjustedDay < 6 && days[adjustedDay]) {
    currentDay = days[adjustedDay].code;
  }
  
  // Определяем текущую неделю
  currentWeek = getCurrentWeek();
}

// Запускаем автоопределение при загрузке
autoSelectToday();