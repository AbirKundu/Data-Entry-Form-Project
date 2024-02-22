// document.addEventListener('DOMContentLoaded', function () {
//     var totalAmountCell = document.querySelector('#data-table tbody tr:last-child td:last-child');
    
//     // Function to calculate total amount
//     function calculateTotalAmount() {
//         var totalAmount = 0;
//         var dataRows = document.querySelectorAll('#data-table tbody tr:not(:last-child)');
//         dataRows.forEach(function (row) {
//             var amountCell = row.querySelector('td:last-child');
//             var amount = parseFloat(amountCell.textContent);
//             if (!isNaN(amount)) {
//                 totalAmount += amount;
//             }
//         });
//         totalAmountCell.textContent = totalAmount.toFixed(2);
//     }

//     // Trigger calculation on input
//     var dataRows = document.querySelectorAll('#data-table tbody tr:not(:last-child)');
//     dataRows.forEach(function (row) {
//         var inputCell = row.querySelector('td:last-child');
//         inputCell.addEventListener('input', calculateTotalAmount);
//     });

//     // Add value on click
//     totalAmountCell.addEventListener('click', function () {
//         var newValue = prompt('Enter value:');
//         if (newValue !== null && !isNaN(newValue)) {
//             totalAmountCell.textContent = parseFloat(newValue).toFixed(2);
//         }
//     });
// });
