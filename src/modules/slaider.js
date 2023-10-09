import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';

const slaider = () => {
    const swiper = new Swiper('.sw1', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.benefits__arrow--right',
            prevEl: '.benefits__arrow--left',
          },
          breakpoints: {
            576: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          },
      });

      const swiper2 = new Swiper('.sw2', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.services__arrow--right',
            prevEl: '.services__arrow--left',
          },
        breakpoints: {
            576: {
              slidesPerView: 2,
              spaceBetween: 170,
            },
          },
      });
};

export default slaider;
