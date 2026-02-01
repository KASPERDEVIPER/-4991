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

// Ключи для localStorage
const STORAGE_KEYS = {
  SUBGROUP: 'pr31_schedule_subgroup',
  LAST_VISIT: 'pr31_schedule_last_visit'
};

// Дни недели (добавим воскресенье)
const days = [
  { code: "vs", short: "Вс", name: "Воскресенье", number: 0, jsDay: 0 },
  { code: "pn", short: "Пн", name: "Понедельник", number: 1, jsDay: 1 },
  { code: "vt", short: "Вт", name: "Вторник", number: 2, jsDay: 2 },
  { code: "sr", short: "Ср", name: "Среда", number: 3, jsDay: 3 },
  { code: "cht", short: "Чт", name: "Четверг", number: 4, jsDay: 4 },
  { code: "pt", short: "Пт", name: "Пятница", number: 5, jsDay: 5 },
  { code: "sb", short: "Сб", name: "Суббота", number: 6, jsDay: 6 }
];

// Константы для автоматического определения недели
const WEEK_CYCLE_START_DATE = '2024-02-02'; // Дата начала цикла (со 2 февраля)
const WEEK_CYCLE_DAYS = 7; // 7 дней в неделе
const START_WEEK_TYPE = 'верх'; // С какой недели начинаем

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
  
  // Загружаем сохранённую подгруппу
  loadSavedSubgroup();
  
  // Автоматически выбираем текущий день и неделю
  autoSelectTodayAndWeek();
  
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
  
  // Запускаем периодическую проверку недели
  setInterval(checkAndUpdateWeek, 300000); // Проверяем каждые 5 минут
  
  // Сохраняем время последнего посещения
  saveLastVisit();
  
  console.log('Приложение успешно инициализировано');
  console.log('Текущая неделя:', currentWeek);
  console.log('Выбранная подгруппа:', selectedSubgroup);
}

// Функции для работы с localStorage
function saveSubgroup(subgroup) {
  try {
    localStorage.setItem(STORAGE_KEYS.SUBGROUP, subgroup);
    console.log('Подгруппа сохранена:', subgroup);
  } catch (error) {
    console.error('Ошибка сохранения подгруппы:', error);
  }
}

function loadSavedSubgroup() {
  try {
    const savedSubgroup = localStorage.getItem(STORAGE_KEYS.SUBGROUP);
    if (savedSubgroup && ['all', '1', '2'].includes(savedSubgroup)) {
      selectedSubgroup = savedSubgroup;
      console.log('Загружена сохранённая подгруппа:', savedSubgroup);
    } else {
      selectedSubgroup = 'all';
      console.log('Используется подгруппа по умолчанию: all');
    }
  } catch (error) {
    console.error('Ошибка загрузки подгруппы:', error);
    selectedSubgroup = 'all';
  }
}

function saveLastVisit() {
  try {
    const now = new Date().toISOString();
    localStorage.setItem(STORAGE_KEYS.LAST_VISIT, now);
    console.log('Время последнего посещения сохранено:', now);
  } catch (error) {
    console.error('Ошибка сохранения времени посещения:', error);
  }
}

function getLastVisit() {
  try {
    const lastVisit = localStorage.getItem(STORAGE_KEYS.LAST_VISIT);
    return lastVisit ? new Date(lastVisit) : null;
  } catch (error) {
    console.error('Ошибка получения времени посещения:', error);
    return null;
  }
}

// Функции для автоматического определения недели
function getDaysBetweenDates(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  // Устанавливаем время на 0:00 для точного расчёта
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);
  
  const diffTime = Math.abs(end - start);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

function getWeekNumberFromStart(startDate, currentDate) {
  const daysBetween = getDaysBetweenDates(startDate, currentDate);
  const weekNumber = Math.floor(daysBetween / WEEK_CYCLE_DAYS);
  return weekNumber;
}

function getCurrentWeekType() {
  const currentDate = new Date();
  const weekNumber = getWeekNumberFromStart(WEEK_CYCLE_START_DATE, currentDate);
  
  // Определяем тип недели
  // Если номер недели чётный - начальный тип, нечётный - противоположный
  let weekType;
  if (weekNumber % 2 === 0) {
    weekType = START_WEEK_TYPE;
  } else {
    weekType = START_WEEK_TYPE === 'верх' ? 'низ' : 'верх';
  }
  
  return weekType;
}

function autoSelectTodayAndWeek() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 - воскресенье, 1 - понедельник и т.д.
  
  // Находим соответствующий день в массиве days
  const todayDay = days.find(day => day.jsDay === dayOfWeek);
  
  // Выбираем текущий день
  if (todayDay) {
    currentDay = todayDay.code;
  } else {
    // Если вдруг не нашли (теоретически не должно случиться)
    currentDay = "pn";
  }
  
  // Определяем текущую неделю
  currentWeek = getCurrentWeekType();
  
  console.log('Автоматический выбор:', {
    date: today.toLocaleDateString(),
    dayOfWeek: dayOfWeek,
    day: currentDay,
    week: currentWeek,
    dayName: todayDay ? todayDay.name : 'Не определено'
  });
}

function checkAndUpdateWeek() {
  const calculatedWeek = getCurrentWeekType();
  
  if (calculatedWeek !== currentWeek) {
    currentWeek = calculatedWeek;
    updateWeekDisplay();
    renderDay(currentDay);
    showNotification(`Автоматически переключено на ${currentWeek === 'верх' ? 'верхнюю' : 'нижнюю'} неделю`);
  }
}

function initDays() {
  const daysContainer = document.getElementById('daysScroll');
  daysContainer.innerHTML = '';
  
  // Фильтруем дни - показываем только рабочие дни (с понедельника по субботу)
  const workingDays = days.filter(day => day.code !== "vs"); // Убираем воскресенье из табов
  
  workingDays.forEach(day => {
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
  
  // Обновляем активные кнопки в меню
  updateMenuButtons();
}

function updateMenuButtons() {
  // Обновляем кнопки подгрупп в меню
  document.querySelectorAll('.sub-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.subgroup === selectedSubgroup);
  });
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
    // Фильтруем только рабочие дни для свайпа
    const workingDays = days.filter(day => day.code !== "vs");
    const currentIndex = workingDays.findIndex(d => d.code === currentDay);
    
    if (diff > 0 && currentIndex < workingDays.length - 1) {
      // Свайп влево - следующий день
      selectDay(workingDays[currentIndex + 1].code);
    } else if (diff < 0 && currentIndex > 0) {
      // Свайп вправо - предыдущий день
      selectDay(workingDays[currentIndex - 1].code);
    }
  }
}

function selectDay(dayCode) {
  if (!schedule[dayCode]) {
    // Для воскресенья показываем особое сообщение
    if (dayCode === "vs") {
      currentDay = dayCode;
      showSundayMessage();
      updateDateDisplay();
      return;
    }
    return;
  }
  
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

function showSundayMessage() {
  const box = document.getElementById('schedule');
  box.innerHTML = `
    <div class="no-lessons">
      <i class="fas fa-church"></i>
      <p>Воскресенье - выходной день! 🎉</p>
      <p style="margin-top: 10px; font-size: 0.9rem;">Отдыхайте и набирайтесь сил</p>
    </div>
  `;
  
  // Обновляем активную вкладку
  document.querySelectorAll('.day-tab').forEach(tab => {
    tab.classList.remove('active');
  });
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
  const now = new Date();
  const dayOfWeek = now.getDay();
  
  // Находим день в массиве days
  const todayDay = days.find(day => day.jsDay === dayOfWeek);
  const weekType = getCurrentWeekType();
  
  // Форматируем дату
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const dateString = now.toLocaleDateString('ru-RU', options);
  
  // Получаем номер недели от начальной даты
  const daysFromStart = getDaysBetweenDates(WEEK_CYCLE_START_DATE, now);
  const weekNumber = Math.floor(daysFromStart / WEEK_CYCLE_DAYS) + 1;
  
  // Если сегодня воскресенье
  if (dayOfWeek === 0) {
    document.getElementById('currentDate').innerHTML = `
      <i class="fas fa-calendar-day"></i>
      <div>
        <div style="font-weight: 700; color: var(--primary-color);">${todayDay.name}, ${dateString.split(',')[1]}</div>
        <div style="font-size: 0.85rem; opacity: 0.8;">Выходной день • ${weekType === 'верх' ? 'Верхняя' : 'Нижняя'} неделя</div>
      </div>
    `;
  } else {
    // Для рабочих дней
    const selectedDay = days.find(d => d.code === currentDay);
    const dayName = selectedDay ? selectedDay.name : todayDay.name;
    
    document.getElementById('currentDate').innerHTML = `
      <i class="fas fa-calendar-day"></i>
      <div>
        <div style="font-weight: 700;">${dayName}, ${dateString.split(',')[1]}</div>
        <div style="font-size: 0.85rem; opacity: 0.8;">${weekType === 'верх' ? 'Верхняя' : 'Нижняя'} неделя (${weekNumber}-я от 02.02)</div>
      </div>
    `;
  }
}

function updateWeekDisplay() {
  const nextWeek = getNextWeek(currentWeek);
  
  document.getElementById('currentWeekMobile').textContent = 
    currentWeek === 'верх' ? 'Верхняя' : 'Нижняя';
  
  document.getElementById('nextWeekMobile').textContent = 
    nextWeek === 'верх' ? 'Верхняя' : 'Нижняя';
    
  // Обновляем информацию в меню
  document.getElementById('currentWeekInfo').textContent = 
    currentWeek === 'верх' ? 'Верхняя' : 'Нижняя';
    
  document.getElementById('nextWeekInfo').textContent = 
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
  console.log(`Рендерим день: ${day}, неделя: ${currentWeek}, подгруппа: ${selectedSubgroup}`);
  
  const box = document.getElementById('schedule');
  
  // Если воскресенье
  if (day === "vs") {
    showSundayMessage();
    return;
  }
  
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
  
  // Если воскресенье или нет расписания для этого дня
  if (currentDay === "vs" || !schedule[currentDay] || !schedule[currentDay][currentWeek]) {
    const nextLessonInfo = document.getElementById('nextLessonInfo');
    
    // Проверяем, какой день будет завтра
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDayOfWeek = tomorrow.getDay();
    
    // Находим следующий рабочий день
    let nextWorkDay = null;
    for (let i = 1; i <= 7; i++) {
      const nextDay = new Date();
      nextDay.setDate(nextDay.getDate() + i);
      const nextDayOfWeek = nextDay.getDay();
      if (nextDayOfWeek !== 0) { // Не воскресенье
        const dayCode = days.find(d => d.jsDay === nextDayOfWeek)?.code;
        if (dayCode && schedule[dayCode]) {
          nextWorkDay = {
            date: nextDay,
            dayCode: dayCode,
            dayName: days.find(d => d.jsDay === nextDayOfWeek)?.name
          };
          break;
        }
      }
    }
    
    if (nextWorkDay) {
      const options = { weekday: 'short', day: 'numeric', month: 'short' };
      const nextDateStr = nextWorkDay.date.toLocaleDateString('ru-RU', options);
      nextLessonInfo.innerHTML = `
        <i class="fas fa-calendar-alt"></i>
        <span>Следующая пара: ${nextWorkDay.dayName.toLowerCase()}</span>
      `;
    } else {
      nextLessonInfo.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Пар больше нет</span>
      `;
    }
    return;
  }
  
  const dayData = schedule[currentDay];
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
    autoSelectTodayAndWeek();
    updateDateDisplay();
    updateWeekDisplay();
    initDays();
    renderDay(currentDay);
    scrollToActiveDay();
    showNotification('Переход на сегодняшний день');
  });
  
  // Кнопка меню настроек
  document.getElementById('menuToggle').addEventListener('click', openMenu);
  document.getElementById('closeMenu').addEventListener('click', closeMenu);
  document.getElementById('menuOverlay').addEventListener('click', closeMenu);
  
  // Кнопка фильтра
  document.getElementById('filterBtn').addEventListener('click', openMenu);
  
  // Плавающая кнопка
  document.getElementById('floatingActionBtn').addEventListener('click', () => {
    // Если сегодня воскресенье, переходим на понедельник
    const today = new Date();
    if (today.getDay() === 0) {
      selectDay('pn');
      showNotification('Переход на понедельник');
    } else {
      selectDay('pn');
      showNotification('Переход на понедельник');
    }
  });
  
  // Выбор подгруппы в меню
  document.querySelectorAll('.sub-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const subgroup = btn.dataset.subgroup;
      selectedSubgroup = subgroup;
      
      // Сохраняем выбор в localStorage
      saveSubgroup(subgroup);
      
      // Обновляем кнопки в меню
      updateMenuButtons();
      
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
  
  // При открытии меню обновляем активные кнопки
  updateMenuButtons();
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