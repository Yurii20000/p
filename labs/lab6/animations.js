// Створіть новий елемент скрипта
var scriptElement = document.createElement('script');

// Встановіть атрибут src
scriptElement.src = 'https://cse.google.com/cse.js?cx=603f2d42a536b4b43';

// Додайте атрибут async
scriptElement.async = true;

// Отримайте елемент body
var bodyElement = document.getElementsByTagName('body')[0];

// Додайте елемент скрипта в кінець body
bodyElement.appendChild(scriptElement);

// Створіть новий елемент div
var divElement = document.createElement('div');

// Додайте клас gcse-search до нового елемента div
divElement.className = 'gcse-search';

// Додайте новий елемент div в кінець body
bodyElement.appendChild(divElement);

