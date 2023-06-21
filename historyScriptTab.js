$(document).ready( function () {
    var data = [ // Это ваш исходный массив данных
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

    // Инициализация DataTable
    $('#historyTable').DataTable({
      data: data,
      columns: Object.keys(data[0]).map(key => ({title: key, data: key}))
    });

    // Добавление обработчика событий на клик по строке
    $('#historyTable tbody').on('click', 'tr', function () {
      var tr = $(this);
      var row = $('#historyTable').DataTable().row(tr);

      if (row.child.isShown()) {
        // Если строка уже раскрыта, скрываем ее
        row.child.hide();
        tr.removeClass('shown');
      } else {
        // Если строка скрыта, отображаем ее
        // Например, отобразим все данные строки в виде JSON
        row.child('<pre>' + JSON.stringify(row.data(), null, 2) + '</pre>').show();
        tr.addClass('shown');
      }
    });
  } );
