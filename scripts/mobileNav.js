$(document).ready(function () {

  // Not showing mobile nav on default
  let showedMobileNav = false

  // Detect window width on load
  detectWidth();
  // Bind with onResize listener
  $(window).resize(detectWidth);


  // Burger icon clicked
  $('#burger-icon').click(function () {
    // Show or Hide mobileNav
      if ( showedMobileNav === true ) {
      hideMobileNav()
      showedMobileNav = false
    } else {
      showMobileNav()
      showedMobileNav = true
    }
  });


  // mobileNav link onClick
  $("#mobileNav-home, #mobileNav-skills, #mobileNav-testimonials, #mobileNav-projects, #mobileNav-contact, #mobileNav-mobile-home").click(function () {
    hideMobileNav()
    showedMobileNav = false
  });


  function detectWidth () {
    const windowWidth = $(window).width();
    if ( windowWidth > 768 ) {
      hideMobileNav()
      showedMobileNav = false
    }
  }
  
  function hideMobileNav () {
    $('body').removeClass('show-mobile-nav').addClass('hide-mobile-nav')
    $('#mobileNav').animate({opacity: 0}, 200);
    $('.mobile-top-nav').animate({backgroundColor: '#fff'}, 200)
  
    // display none after the mobileNav animation is done
    setTimeout(function(){
      $("#mobileNav, #mobileNav a").css( 
        'display', 'none' 
      );
    }, 200);
  }
  
  function showMobileNav () {
    $('#mobileNav').animate({opacity: 1}, 200)
    $('.mobile-top-nav').animate({backgroundColor: '#08194f'}, 200)

    $('body').removeClass('hide-mobile-nav').addClass('show-mobile-nav')
    $("#mobileNav").css( 
      'display', 'flex' 
    );
    $("#mobileNav a").css( 
      'display', 'block' 
    );
  }
});