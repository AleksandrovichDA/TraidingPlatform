<!DOCTYPE html>
<html>
<head>
    <title>История позиций</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <script src="history.js"></script>
</head>
 <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.css">

  <!-- Подключаем jQuery -->
  <script type="text/javascript" charset="utf8" src="https://code.jquery.com/jquery-3.5.1.js"></script>

  <!-- Подключаем DataTables JS -->
  <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.js"></script>

  <script type="text/javascript">
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

    $('#historyTable').DataTable({
      data: data,
      columns: Object.keys(data[0]).map(key => ({title: key, data: key}))
    });
  } );
  </script>
<body>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Trading Assistant</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="main.html">Log</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="history.html">History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#account">Account</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <div class="container">

    <table id="historyTable">
        <thead>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th colspan="2">Date</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th colspan="3">netProfit</th>
            <th></th>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th>dateOpen</th>
                <th>dateClose</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>netProfitUSD</th>
                <th>netProfitPercent</th>
                <th>netProfitR</th>
                <th></th>
            </tr>
    </table>
    </div>
    <script src="history.js"></script>
</body>
</html>
