function loadHistoryData() {
    // TODO: Замените этот код на вызов API или другой источник данных
    var data = [
        {
            date: '01.2023',
            token: 'BTC',
            longShort: 'Long',
            lev: '5x',
            dateOpen: '01.01.2023',
            dateClose: '01.02.2023',
            entryAvg: '50000',
            targetAvg: '60000',
            marginUsed: '1000',
            fees: '50',
            netProfitUSD: '500',
            netProfitPercent: '10',
            netProfitR: '2',
            exchange: 'Bitget'
        },
        // добавьте больше объектов для каждой строки
    ];

    var tableBody = document.getElementById('historyTable').querySelector('tbody');

    data.forEach(function(rowData) {
        var row = document.createElement('tr');
        
        // Добавьте каждую ячейку в строку
        Object.values(rowData).forEach(function(cellData) {
            var cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });

        // Добавьте строку в таблицу
        tableBody.appendChild(row);
    });
}

function loadHistoryData() {
    // TODO: Замените этот код на вызов API или другой источник данных
    var data = [
        {
            date: '01.2023',
            token: 'BTC',
            longShort: 'Long',
            lev: '5x',
            dateOpen: '01.01.2023',
            dateClose: '01.02.2023',
            entryAvg: '50000',
            targetAvg: '60000',
            marginUsed: '1000',
            fees: '50',
            netProfitUSD: '500',
            netProfitPercent: '10',
            netProfitR: '2',
            exchange: 'Bitget'
        },
        // добавьте больше объектов для каждой строки
    ];

    var tableBody = document.getElementById('historyTable').querySelector('tbody');

    data.forEach(function(rowData) {
        var row = document.createElement('tr');
        
        // Добавьте каждую ячейку в строку
        Object.values(rowData).forEach(function(cellData) {
            var cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });

        // Добавьте строку в таблицу
        tableBody.appendChild(row);
    });
}

// Загрузите данные при загрузке страницы
window.addEventListener('load', loadHistoryData);


// Загрузите данные при загрузке страницы
window.addEventListener('load', loadHistoryData);

