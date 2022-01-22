$(document).ready(function () {

  $(window).scroll(function() {
    if($(window).scrollTop() > 1000) {
      $('#container').addClass('show-jump-to-top-icon').removeClass('hide-jump-to-top-icon')
    } else {
      $('#container').addClass('hide-jump-to-top-icon').removeClass('show-jump-to-top-icon')
    }
  });

  $('#container .jump-to-top').click(function () {
    window.scrollTo(0, 0)
  })
  
})