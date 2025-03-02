import {setupMobileMenu} from "./mobileMenu.js";

setupMobileMenu();

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').slice(1);
  const targetElement = document.getElementById(targetId);

  let targetOffset;

  if (targetId === 'plan') {
    targetOffset = targetElement.offsetTop - 10;
  } else {
    targetOffset = targetElement.offsetTop - 30;
  }

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
  breakpoints: {
    2000: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});