$(document).ready(function () {
  
  const copyIcon = document.querySelector('#copy-hint .copy-icon')
  
  // Initialize ClipboardJS
  var clipboard = new ClipboardJS('.copy-icon');
  clipboard.on('success', function(e) {
    // Hint changed from 'Copy to Clipboard' to 'Copied.'
    $('#copy-hint .copy-icon').attr('aria-label', 'Copied');
    setTimeout(showCopy, 2000);
    e.clearSelection();
  });

  showCopy = () => {
    $('#copy-hint .copy-icon').attr('aria-label', 'Copy');
  }

});