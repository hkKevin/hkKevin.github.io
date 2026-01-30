// $(document).ready(function () {
document.addEventListener('DOMContentLoaded', function() {
  const swiperSettings = {
    observer: true,
    observeParents: true,
    spaceBetween: 100,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    keyboard: {
      enabled: true,
      // onlyInViewport: false,
      onlyInViewport: true,
      pageUpDown: false,
    }
  }

  const sydneyTrainsSwiper = new Swiper(".sydneyTrainsSwiper", swiperSettings)
  const memoSwiper = new Swiper(".memoSwiper", swiperSettings)
  const movieWorldSwiper = new Swiper(".movieWorldSwiper", swiperSettings)
})
// })
