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

  // Update box outer glow based on theme:
  box.style.boxShadow = document.body.classList.contains('dark-theme')
    ? '0 0 10px 5px rgba(255, 255, 255, 0.5)' // White outer glow for dark mode
    : '0 0 10px 5px rgba(0, 0, 0, 0.5)'; // Black outer glow for light mode
}
