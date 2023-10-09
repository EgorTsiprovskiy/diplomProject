import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';

const slaider = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.benefits__arrow--right',
            prevEl: '.benefits__arrow--left',
          },
        breakpoints: {
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          },
      });

      const swiper2 = new Swiper('.sw2', {
        modules: [Navigation],
        
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.services__arrow--right',
            prevEl: '.services__arrow--left',
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
