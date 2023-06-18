document.addEventListener("DOMContentLoaded", function () {
  // Add Entry Row
  const addEntryBtn = document.getElementById("addEntryBtn");
  const entriesTableBody = document.getElementById("entriesTableBody");

  let entryRowCount = 0;

  addEntryBtn.addEventListener("click", function () {
    const entryRow = createTableRow("entry", entryRowCount);
    entriesTableBody.insertAdjacentHTML("beforeend", entryRow);
    entryRowCount++;
  });

  // Add Target Row
  const addTargetBtn = document.getElementById("addTargetBtn");
  const targetsTableBody = document.getElementById("targetsTableBody");

  let targetRowCount = 0;

  addTargetBtn.addEventListener("click", function () {
    const targetRow = createTableRow("target", targetRowCount);
    targetsTableBody.insertAdjacentHTML("beforeend", targetRow);
    targetRowCount++;
  });

  // Remove Row
  function removeRow(event) {
    const rowType = event.target.getAttribute("data-entry-type");
    const rowId = event.target.getAttribute(`data-${rowType}row`);
    const rowElement = document.getElementById(`${rowType}Row${rowId}`);
    rowElement.remove();
  }

  // Save Trade
  const saveTradeBtn = document.getElementById("saveTradeBtn");

  saveTradeBtn.addEventListener("click", function () {
    const token = document.getElementById("tokenInput").value;
    const longShort = document.getElementById("longShortInput").value;
    const account = document.getElementById("accountInput").value;
    const margin = document.getElementById("marginInput").value;
    const lev = document.getElementById("levInput").value;
    const dateOpen = document.getElementById("dateOpenInput").value;
    const sl = document.getElementById("slInput").value;
    const fees = document.getElementById("feesInput").value;
    const exchange = document.getElementById("exchangeInput").value;

    const entriesData = getRowData("entry", entryRowCount);
    const targetsData = getRowData("target", targetRowCount);

    const positionData = {
      "ID": generateGuid(),
      "Token": token,
      "Long/Short": longShort,
      "Account, ID": account,
      "Margin, %": margin,
      "Lev. (spot/futures)": lev,
      "Date/Screen Open": dateOpen,
      "Date/Screen Close": null,
      "SL (Стоп-лосс)": sl,
      "Fees (Комиссии)": fees,
      "STATUS (Статус)": "draft",
      "Exchange (Биржа)": exchange,
    };

    const tradeData = {
      "Position": positionData,
      "Entries": entriesData,
      "Targets": targetsData,
    };

    // Send the tradeData to the server or perform any desired operations with the data

    // Reset the form
    document.getElementById("tradeForm").reset();

    // Clear dynamic rows
    entriesTableBody.innerHTML = "";
    targetsTableBody.innerHTML = "";

    entryRowCount = 0;
    targetRowCount = 0;

    // Close the modal
    const modal = bootstrap.Modal.getInstance(document.getElementById("tradeModal"));
    modal.hide();
  });

  // Generate a GUID
  function generateGuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  }

  // Create a table row with input fields
  function createTableRow(rowType, rowCount) {
    const row = `
      <tr id="${rowType}Row${rowCount}">
        <td>
          <input type="number" class="form-control input-sm" id="${rowType}Value${rowCount}" required>
        </td>
        <td>
          <input type="number" class="form-control input-sm" id="${rowType}SetupPercentage${rowCount}" required>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" data-${rowType}row="${rowCount}" data-entry-type="${rowType}" onclick="removeRow(event)">-</button>
        </td>
      </tr>
    `;
    return row;
  }

  // Get the data from table rows
  function getRowData(rowType, rowCount) {
    const rowData = [];

    for (let i = 0; i < rowCount; i++) {
      const valueInput = document.getElementById(`${rowType}Value${i}`);
      const setupPercentageInput = document.getElementById(`${rowType}SetupPercentage${i}`);

      rowData.push({
        "ID": generateGuid(),
        "Value": valueInput ? valueInput.value : "",
        "Setup Percentage": setupPercentageInput ? setupPercentageInput.value : "",
      });
    }

    return rowData;
  }
});
