$(document).ready(function () {
  
  // Initialize ClipboardJS
  var clipboard = new ClipboardJS('.copy-icon');
  clipboard.on('success', function(e) {
    // Hint changed from 'Copy to Clipboard' to 'Copied.'
    $('#copy-hint').attr('aria-label', 'Copied');
    setTimeout(showCopy, 500);
    e.clearSelection();
  });

  showCopy = () => {
    $('#copy-hint').attr('aria-label', 'Copy');
  }

});