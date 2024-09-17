$(document).ready(function () {

  // Ensure the window scrolls to the top
  $('#topNav-intro, .top-nav .logo-link').click((evt) => {
    evt.preventDefault() // Prevent scrolling to the #intro element
    window.scrollTo(0, 0) // Instead, scroll to the very top
    history.pushState(null, null, '/#intro'); // Update the URL
  })
  
  detectScrollY()
  $(window).scroll(detectScrollY)

  function detectScrollY () {

    if ( parseInt($(window).scrollTop()) > 100 ) {
      // Stick to top when users scroll down for 100px
      $('.top-nav-container').addClass('stick-to-top')
    } else {
      // Remove stickyness for top nav
      $('.top-nav-container').removeClass('stick-to-top')
    }
    
  }
})