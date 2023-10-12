import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const slaider = () => {
  const swiper = new Swiper(".sw1", {
    modules: [Navigation],

    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".window__arrow--right1",
      prevEl: ".window__arrow--left1",
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  const swiper2 = new Swiper(".sw2", {
    modules: [Navigation],

    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".services__arrow--right",
      prevEl: ".services__arrow--left",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  const swiperBalkony1 = new Swiper(".swiperBalkony1", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 100,
    autoHeight: true,
    navigation: {
      nextEl: ".balkony__arrow--right1",
      prevEl: ".balkony__arrow--left1",
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  const swiperBalkony2 = new Swiper(".swiperBalkony2", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".balkony__arrow--right2",
      prevEl: ".balkony__arrow--left2",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
  const swiperKuhni1 = new Swiper(".swiperKuhni1", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 100,
    navigation: {
      nextEl: ".kuhni__arrow--right1",
      prevEl: ".kuhni__arrow--left1",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
  const swiperKuhni2 = new Swiper(".swiperKuhni2", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".kuhni__arrow--right2",
      prevEl: ".kuhni__arrow--left2",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
};

export default slaider;
