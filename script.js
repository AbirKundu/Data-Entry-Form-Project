const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', toggleTheme);

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const tableHeaders = document.querySelectorAll('th');
  const box = document.querySelector('.box');

  // Handle table headers (optional):
  tableHeaders.forEach(header => {
    if (document.body.classList.contains('dark-theme')) {
      header.style.backgroundColor = '#222';
      header.style.color = '#fff';
    } else {
      header.style.backgroundColor = 'white';
      header.style.color = '#000';
    }
  });
}
function loadSignature(event) {
    var input = event.target;

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var signature = input.parentNode.querySelector('p');
            signature.style.backgroundImage = "url('" + e.target.result + "')";
            signature.style.backgroundSize = "cover";
        };

        reader.readAsDataURL(input.files[0]);
    }
}
function redirectToCredit() {
  window.location.href = 'index3.html';
}


function exportToExcel() {
  var tableData = [];
  var table = document.getElementById("toExcel");

  // Iterate through each row in the table
  for (var i = 0; i < table.rows.length; i++) {
    var rowData = [];
    var row = table.rows[i];
    
    // Iterate through each cell in the row
    for (var j = 0; j < row.cells.length; j++) {
      var cell = row.cells[j];
      
      // Check if the cell contains an input element
      var input = cell.querySelector("input");
      if (input) {
        rowData.push(input.value);
      } else {
        rowData.push(cell.textContent.trim());
      }
    }
    // Push the row data to the table data array
    tableData.push(rowData);
  }

  // Create a workbook
  var wb = XLSX.utils.book_new();
  var ws = XLSX.utils.aoa_to_sheet(tableData);

  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  // Save workbook as Excel file
  var fileName = "table_data.xlsx";
  XLSX.writeFile(wb, fileName);
}

