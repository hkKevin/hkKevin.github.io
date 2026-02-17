document.querySelectorAll('.modal .table-container .clickable-row').forEach(row => {
  row.addEventListener('click', () => {
    window.open(row.dataset.href, '_blank', 'noopener, noreferrer');
  });
  row.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent space from scrolling the page
      window.open(row.dataset.href, '_blank', 'noopener,noreferrer');
    }
  });
});