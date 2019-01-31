$(document).ready(function () {

  // var sideNavWidth = $("#sidenav").width();
  // console.log("sideNavWidth: " + sideNavWidth);
  // // Navigation Bar
  // let prevScrollPosition = window.pageYOffset;
  // window.onscroll = () => {
  //   // alert(document.getElementById('sidenav').style.width)
  //   let currentScrollPosition = window.pageYOffset;
  //   if (prevScrollPosition > currentScrollPosition) {
  //     // show
  //     // alert("show")
  //     $("#navbar").css("top", "0");
  //     $("#burger-icon").css("top", "0");
  //     // document.getElementById('navbar').style.top = '0';
  //     // document.getElementById('burger-icon').style.top = '0';
  //     // } else if (prevScrollPosition < currentScrollPosition && (sideNavWidth == 0 || sideNavWidth == '0px') ) {
  //   } else if (prevScrollPosition < currentScrollPosition) {
  //     // } else if (prevScrollPosition < currentScrollPosition) {
  //     // hide
  //     // alert("hide")
  //     $('#navbar').css("top", "-100px");
  //     $('#burger-icon').css("top", "-100px");
  //     // document.getElementById('navbar').style.top = '-100px';
  //     // document.getElementById('burger-icon').style.top = '-100px';
  //   }
  //   prevScrollPosition = currentScrollPosition;
  // }





  // Burger icon onClick
  $('#burger-icon').click(function () {
    // Scrolling is prohibited when sidenav is displayed
    if ($('body').css('overflow') != 'hidden') {
      $('body').css('overflow', 'hidden');
    } else if ($('body').css('overflow') != 'initial') {
      $('body').css("overflow", "initial");
    }

    // Animation for burger icon
    $('#bar-1').toggleClass('transform-bar-1');
    $('#bar-2').toggleClass('transform-bar-2');
    $('#bar-3').toggleClass('transform-bar-3');



    // Show or Hide sidenav
    var toggleWidth = "";
    if ( $("#sidenav").width() != 0 ) {
      toggleWidth = "0px"
      $("#sidenav a").css({ opacity: 0 });
    } else {
      toggleWidth = "100%"
      $("#sidenav a").css({ opacity: 1 });
    }
    
    $('#sidenav').animate({ width: toggleWidth }, 100);

    // var toggleWidth = $("#sidenav").width() != 0 ? "0px" : "100%";
    // $('#sidenav').animate({ width: toggleWidth }, 100);

    
  });


  // SideNav link onClick
  $("#sidenav-home, #sidenav-about-me, #sidenav-my-projects, #sidenav-contact-me").click(function () {
    // Hide sidenav
    $('#sidenav').animate({ width: 0 }, 100);

    // Make the app scrollable again
    $('body').css({ "overflow": "initial" });

    // Transform back to the burger icon
    $('#bar-1').toggleClass('transform-bar-1');
    $('#bar-2').toggleClass('transform-bar-2');
    $('#bar-3').toggleClass('transform-bar-3');

    setTimeout(function(){ $("#burger-icon").css("top", "0"); }, 1500);
    
  });


  // Burger icon on hover
  $("#burger-icon").hover( function() {
    $("#bar-1, #bar-2, #bar-3").toggleClass("burger-bar-hover");
  });
  
});