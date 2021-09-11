$(document).ready(function () {

  $(window).scroll(function() {
    if($(window).scrollTop() > 1000) {
      // console.log("show Jump to Top");
      $('#container').addClass('show-icon').removeClass('hide-icon')
    } else {
      // console.log("hide Jump to Top");
      $('#container').addClass('hide-icon').removeClass('show-icon')
    }
  });

  $('#container .jump-to-top').click(function () {
    window.scrollTo(0, 0)
  })
  
})