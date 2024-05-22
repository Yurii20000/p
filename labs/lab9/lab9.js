document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
    
    async function fetchCurrencyRates() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            updateRates(data);
        } catch (error) {
            console.error("Помилка при отриманні даних:", error);
        }
    }

    function updateRates(data) {
        const ratesTable = document.getElementById('rates');
        ratesTable.innerHTML = ""; // Очищуємо поточний вміст

        data.forEach(currency => {
            if (['USD', 'EUR', 'GBP'].includes(currency.cc)) { // Вибираємо певні валюти
                const row = document.createElement('tr');
                const currencyName = document.createElement('td');
                const currencyRate = document.createElement('td');
                currencyName.textContent = currency.cc;
                currencyRate.textContent = currency.rate.toFixed(2);
                row.appendChild(currencyName);
                row.appendChild(currencyRate);
                ratesTable.appendChild(row);
            }
        });
    }

    fetchCurrencyRates();
    setInterval(fetchCurrencyRates, 60000); // Оновлюємо кожну хвилину
});
