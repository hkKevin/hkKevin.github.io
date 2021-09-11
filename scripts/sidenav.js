$(document).ready(function () {

  // Not showing side nav on default
  let showedSideNav = false

  // Detect window width on load
  detectWidth();
  // Bind with onResize listener
  $(window).resize(detectWidth);


  // Burger icon clicked
  $('#burger-icon').click(function () {
    // Show or Hide sidenav
      if ( showedSideNav === true ) {
      hideSideNav()
      showedSideNav = false
    } else {
      showSideNav()
      showedSideNav = true
    }
  });


  // SideNav link onClick
  $("#sidenav-home, #sidenav-about, #sidenav-projects, #sidenav-contact").click(function () {
    hideSideNav()
    showedSideNav = false

  });


  function detectWidth () {
    const windowWidth = $(window).width();
    if ( windowWidth > 768 ) {
      hideSideNav()
      showedSideNav = false
    }
  }  
  
  function hideSideNav () {
    $('body').removeClass('show-side-nav').addClass('hide-side-nav')
    $('#sidenav').animate({opacity: 0}, 200);
  
    // display none after the sidenav animation is done
    setTimeout(function(){
      $("#sidenav, #sidenav a").css( 
        'display', 'none' 
      );
    }, 200);
  }
  
  function showSideNav () {
    $('#sidenav').animate({opacity: 1}, 200)

    $('body').removeClass('hide-side-nav').addClass('show-side-nav')
    $("#sidenav").css( 
      'display', 'flex' 
    );
    $("#sidenav a").css( 
      'display', 'block' 
    );
  }  
});