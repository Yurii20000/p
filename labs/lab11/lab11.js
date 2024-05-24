// Завантаження JSON даних з файлу
fetch('schedule.json') // Виконує HTTP запит до файлу schedule.json
  .then(response => response.json()) // Перетворює відповідь у формат JSON
  .then(data => generateSchedule(data)); // Викликає функцію generateSchedule з даними

// Функція для генерації розкладу
function generateSchedule(data) {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]; // Масив днів тижня
  const table = document.createElement('table'); // Створює елемент таблиці
  const thead = document.createElement('thead'); // Створює елемент заголовка таблиці
  const tbody = document.createElement('tbody'); // Створює елемент тіла таблиці

  // Створення заголовків таблиці
  const headerRow = document.createElement('tr'); // Створює рядок таблиці для заголовків
  const headers = ['Day', 'Time', 'Subject', 'Teacher']; // Масив заголовків таблиці
  headers.forEach(headerText => { // Для кожного заголовка в масиві
    const th = document.createElement('th'); // Створює елемент заголовка таблиці
    th.textContent = headerText; // Встановлює текст заголовка
    headerRow.appendChild(th); // Додає заголовок до рядка заголовків
  });
  thead.appendChild(headerRow); // Додає рядок заголовків до заголовка таблиці
  table.appendChild(thead); // Додає заголовок таблиці до таблиці

  // Заповнення таблиці даними
  daysOfWeek.forEach(day => { // Для кожного дня в масиві днів тижня
    const classesForDay = data.classes.filter(cls => cls.day === day); // Фільтрує класи для конкретного дня
    classesForDay.forEach(cls => { // Для кожного класу в масиві класів для дня
      const row = document.createElement('tr'); // Створює новий рядок таблиці
      const cellDay = document.createElement('td'); // Створює комірку для дня
      const cellTime = document.createElement('td'); // Створює комірку для часу
      const cellSubject = document.createElement('td'); // Створює комірку для предмету
      const cellTeacher = document.createElement('td'); // Створює комірку для вчителя

      cellDay.textContent = cls.day; // Встановлює текст для комірки дня
      cellTime.textContent = cls.time; // Встановлює текст для комірки часу
      cellSubject.textContent = cls.subject; // Встановлює текст для комірки предмету
      cellTeacher.textContent = cls.teacher; // Встановлює текст для комірки вчителя

      row.appendChild(cellDay); // Додає комірку дня до рядка
      row.appendChild(cellTime); // Додає комірку часу до рядка
      row.appendChild(cellSubject); // Додає комірку предмету до рядка
      row.appendChild(cellTeacher); // Додає комірку вчителя до рядка

      tbody.appendChild(row); // Додає рядок до тіла таблиці
    });
  });

  table.appendChild(tbody); // Додає тіло таблиці до таблиці
  const scheduleContainer = document.getElementById('schedule'); // Отримує контейнер для розкладу за його ID
  scheduleContainer.appendChild(table); // Додає таблицю до контейнера
}
