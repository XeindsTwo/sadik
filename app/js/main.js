import {setupMobileMenu} from "./mobileMenu.js";

setupMobileMenu();

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').slice(1);
  const targetElement = document.getElementById(targetId);

  let targetOffset;

  targetOffset = targetElement.offsetTop - 10;
  window.scrollTo({top: targetOffset, behavior: 'smooth'});
}

const menuLinks = document.querySelectorAll('.desktop');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', scrollToSection);
});

new Swiper('.swiper', {
  navigation: {
    nextEl: '.reviews__btn--next',
    prevEl: '.reviews__btn--prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  breakpoints: {
    2000: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});