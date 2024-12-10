const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    breakpoints: {
      // when window width is >= 320px
      280: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    }
  });