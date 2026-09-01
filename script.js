const scheduleData = {
    понедельник: [
        {
            time: "08:30–10:10",
            subject: "Основы конфигурирования в корпоративных информационных системах на платформе 1С: Предприятие",
            teacher: "Варфоломеева П.А.",
            room: "ауд. 415"
        },
        {
            time: "10:20–12:00",
            subject: "Технология разработки и защиты баз данных",
            teacher: "Цымбалюк Л.Н.",
            room: "ауд. 3319 НовГУ"
        },
        {
            time: "12:45–14:25",
            subject: "Разработка программных модулей",
            teacher: "Павлов М.А.",
            room: "ауд. 408"
        },
        {
            time: "14:35–16:15",
            subject: "Проектный практикум",
            teacher: "",
            room: ""
        },
        {
            time: "16:25–18:05",
            subject: "",
            teacher: "",
            room: ""
        }
    ],

    вторник: [
        {
            time: "08:30–10:10",
            subject: "Иностранный язык в профессиональной деятельности",
            teacher: "Кручинина О.А.",
            room: "ауд. 321"
        },
        {
            time: "10:20–12:00",
            subject: "Технология разработки и защиты баз данных",
            teacher: "Цымбалюк Л.Н.",
            room: "ауд. 3319 НовГУ"
        },
        {
            time: "12:45–14:25",
            subject: "Оформление технической документации",
            teacher: "Сизова А.Э.",
            room: "ауд. 404"
        },
        {
            time: "14:35–16:15",
            parallel: true,
            lessons: [
                {
                    subject: "Разработка мобильных приложений",
                    teacher: "Шульцев А.В.",
                    room: "ауд. 3301 НовГУ"
                },
                {
                    subject: "Машинное обучение и большие данные",
                    teacher: "Филиппов И.И.",
                    room: "ауд. 3318 НовГУ"
                }
            ]
        },
        {
            time: "16:25–18:05",
            subject: "",
            teacher: "",
            room: ""
        }
    ],

    среда: [
        {
            time: "08:30–10:10",
            subject: "",
            teacher: "",
            room: ""
        },
        {
            time: "10:20–12:00",
            subject: "",
            teacher: "",
            room: ""
        },
        {
            time: "12:45–14:25",
            subject: "Разработка программных модулей",
            teacher: "Павлов М.А.",
            room: "ауд. 408"
        },
        {
            time: "14:35–16:15",
            subject: "Разработка мобильных приложений",
            teacher: "Шульцев А.В.",
            room: "ауд. 3301 НовГУ"
        },
        {
            time: "16:25–18:05",
            subject: "Компьютерные сети",
            teacher: "Андреев И.А.",
            room: "ауд. 226"
        }
    ],

    четверг: [
        {
            time: "08:30–10:10",
            subject: "Компьютерные сети",
            teacher: "Андреев И.А.",
            room: "ауд. 226"
        },
        {
            time: "10:20–12:00",
            subject: "Основы конфигурирования в корпоративных информационных системах на платформе 1С: Предприятие",
            teacher: "Варфоломеева П.А.",
            room: "ауд. 415"
        },
        {
            time: "12:45–14:25",
            subject: "Физическая культура",
            teacher: "Демченко Д.Л.",
            room: "СП зал"
        },
        {
            time: "14:35–16:15",
            parallel: true,
            lessons: [
                {
                    subject: "Технология разработки и защиты баз данных",
                    teacher: "Цымбалюк Л.Н.",
                    room: "ауд. 3319 НовГУ"
                },
                {
                    subject: "Разработка программных модулей",
                    teacher: "Павлов М.А.",
                    room: "ауд. 408"
                }
            ]
        }
    ],

    пятница: [
        {
            time: "08:30–10:10",
            subject: "Разработка мобильных приложений",
            teacher: "Шульцев А.В.",
            room: "ауд. 3301 НовГУ"
        },
        {
            time: "10:20–12:00",
            subject: "Основы конфигурирования в корпоративных информационных системах на платформе 1С: Предприятие",
            teacher: "Варфоломеева П.А.",
            room: "ауд. 415"
        },
        {
            time: "12:45–14:25",
            subject: "Оформление технической документации",
            teacher: "Сизова А.Э.",
            room: "ауд. 404"
        },
        {
            time: "14:35–16:15",
            subject: "Машинное обучение и большие данные",
            teacher: "Филиппов И.И.",
            room: "ауд. 3318 НовГУ"
        }
    ]
};

const dayNames = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница"
];

const dayShort = {
    понедельник: "Пн",
    вторник: "Вт",
    среда: "Ср",
    четверг: "Чт",
    пятница: "Пт"
};

let selectedDay = getTodayName();

function getTodayName() {
    const day = new Date().getDay();
    const map = {
        1: "понедельник",
        2: "вторник",
        3: "среда",
        4: "четверг",
        5: "пятница"
    };
    return map[day] || "понедельник";
}

function escapeHtml(value) {
    return String(value || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function lessonContent(lesson) {
    return `
        <div class="lesson-subject">${escapeHtml(lesson.subject)}</div>
        ${lesson.teacher ? `<div class="lesson-teacher">${escapeHtml(lesson.teacher)}</div>` : ""}
        ${lesson.room ? `<div class="lesson-room">${escapeHtml(lesson.room)}</div>` : ""}
    `;
}

function renderDays() {
    const container = document.getElementById("daysScroll");
    container.innerHTML = "";

    dayNames.forEach(day => {
        const button = document.createElement("button");
        button.className = "day-button";
        if (day === selectedDay) button.classList.add("active");

        button.innerHTML = `
            <span class="day-short">${dayShort[day]}</span>
            <span class="day-full">${day[0].toUpperCase() + day.slice(1)}</span>
        `;

        button.addEventListener("click", () => {
            selectedDay = day;
            renderDays();
            renderSchedule();
        });

        container.appendChild(button);
    });
}

function renderSchedule() {
    const container = document.getElementById("schedule");
    const lessons = scheduleData[selectedDay] || [];

    container.innerHTML = "";

    lessons.forEach(lesson => {
        const element = document.createElement("div");
        element.className = "lesson";

        if (lesson.parallel) {
            element.innerHTML = `
                <div class="lesson-time">${lesson.time}</div>
                <div class="lesson-info parallel-lessons">
                    ${lesson.lessons.map(item => `
                        <div class="parallel-item">
                            ${lessonContent(item)}
                        </div>
                    `).join("")}
                </div>
            `;
        } else if (!lesson.subject) {
            element.classList.add("empty-lesson");
            element.innerHTML = `
                <div class="lesson-time">${lesson.time}</div>
                <div class="lesson-info">
                    <div class="empty-text">—</div>
                </div>
            `;
        } else {
            element.innerHTML = `
                <div class="lesson-time">${lesson.time}</div>
                <div class="lesson-info">${lessonContent(lesson)}</div>
            `;
        }

        container.appendChild(element);
    });

    if (!lessons.length) {
        container.innerHTML = `
            <div class="lesson">
                <div class="lesson-info">
                    <div class="empty-text">В этот день занятий нет</div>
                </div>
            </div>
        `;
    }

    const prettyDay = selectedDay[0].toUpperCase() + selectedDay.slice(1);
    document.querySelector("#currentDate span").textContent = prettyDay;

    updateNextLesson();
}

function updateCurrentTime() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    document.getElementById("currentTime").textContent = `${hh}:${mm}`;
}

function updateNextLesson() {
    const now = new Date();
    const minutesNow = now.getHours() * 60 + now.getMinutes();

    const times = [
        ["08:30", "10:10"],
        ["10:20", "12:00"],
        ["12:45", "14:25"],
        ["14:35", "16:15"],
        ["16:25", "18:05"]
    ];

    const lessons = scheduleData[selectedDay] || [];
    let next = null;

    for (let i = 0; i < lessons.length; i++) {
        const [h, m] = times[i][0].split(":").map(Number);
        const start = h * 60 + m;

        if (start > minutesNow && (lessons[i].subject || lessons[i].parallel)) {
            next = start - minutesNow;
            break;
        }
    }

    const info = document.getElementById("nextLessonInfo");

    if (next === null) {
        info.textContent = "Следующая пара: —";
    } else {
        const h = Math.floor(next / 60);
        const m = next % 60;

        if (h > 0) {
            info.textContent = `Следующая пара: через ${h} ч ${m} мин`;
        } else {
            info.textContent = `Следующая пара: через ${m} мин`;
        }
    }
}

function showNotification(text) {
    const notification = document.getElementById("notification");
    document.getElementById("notificationText").textContent = text;
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 2000);
}

document.getElementById("todayBtn").addEventListener("click", () => {
    selectedDay = getTodayName();
    renderDays();
    renderSchedule();
});

document.getElementById("toggleWeek").addEventListener("click", () => {
    const current = document.getElementById("currentWeek");
    const next = document.getElementById("nextWeek");

    if (current.textContent === "Верхняя") {
        current.textContent = "Нижняя";
        next.textContent = "Верхняя";
    } else {
        current.textContent = "Верхняя";
        next.textContent = "Нижняя";
    }

    showNotification("Неделя переключена");
});

renderDays();
renderSchedule();
updateCurrentTime();

setInterval(() => {
    updateCurrentTime();
    updateNextLesson();
}, 30000);
