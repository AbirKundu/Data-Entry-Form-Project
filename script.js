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
