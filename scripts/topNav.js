$(document).ready(function () {
  
  detectScrollY()
  $(window).scroll(detectScrollY)

  function detectScrollY () {

    if ( parseInt($(window).scrollTop()) > 65 ) {
      // Show the sticky top nav
      $('.fixed-nav-container').addClass('show')
    } else {
      // Hide the sticky top nav
      $('.fixed-nav-container').removeClass('show')
    }
  }
})