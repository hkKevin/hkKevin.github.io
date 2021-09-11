$(document).ready(function () {

  const swiperSettings = {
    observer: true,
    observeParents: true,
    spaceBetween: 100,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    }
  }

  const sydneyTrainsSwiper = new Swiper(".sydneyTrainsSwiper", swiperSettings)
  const memoSwiper = new Swiper(".memoSwiper", swiperSettings)
  const movieWorldSwiper = new Swiper(".movieWorldSwiper", swiperSettings)

})