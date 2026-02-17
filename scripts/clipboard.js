$(document).ready(function () {
  
  const copyIcon = document.querySelector('#copy-hint .copy-icon')
  
  // Initialize ClipboardJS
  var clipboard = new ClipboardJS('#copy-hint');
  clipboard.on('success', function(e) {
    $('#copy-hint').attr('aria-label', 'Copied!');
    setTimeout(showCopy, 2000);
    e.clearSelection();
  });

  showCopy = () => {
    $('#copy-hint').attr('aria-label', 'Copy');
  }

});