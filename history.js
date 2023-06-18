function loadHistoryData() {
    // TODO: Replace this code with an API call or other data source
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
        // add more objects for each row
    ];

    var tableBody = document.getElementById('historyTable').querySelector('tbody');

    data.forEach(function(rowData) {
        var row = document.createElement('tr');

        // Add each cell to the row
        var keys = Object.keys(rowData);
        keys.forEach(function(key) {
            var cell = document.createElement('td');

            // Check if the cell is a complex cell
            if (key === 'date' || key === 'netProfit') {
                var div = document.createElement('div');

                // Add each subfield as a div within the td cell
                rowData[key].forEach(function(subfield) {
                    var subfieldDiv = document.createElement('div');
                    subfieldDiv.textContent = subfield;
                    div.appendChild(subfieldDiv);
                });

                cell.appendChild(div);
            } else {
                cell.textContent = rowData[key];
            }

            row.appendChild(cell);
        });

        // Add the row to the table
        tableBody.appendChild(row);
    });
}

// Load the data when the page loads
window.addEventListener('load', loadHistoryData);
