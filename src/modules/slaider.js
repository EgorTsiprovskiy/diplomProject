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





// <div class="benefits-arrows">
// 					<div class="benefits__arrow benefits__arrow--left">
// 						<img src="images/benefits/left-arrow.svg" alt="">
// 					</div>
// 					<div class="benefits__arrow benefits__arrow--right">
// 						<img src="images/benefits/right-arrow.svg" alt="">
// 					</div>
// 				</div>




//   const slaiderBlock = document.querySelector(".benefits-wrap");
//   const slaiderArrow = document.querySelector(".benefits-arrows");
//   const slaides = document.querySelectorAll(".benefits__item");

//   let count = 2;
//   let currentSlideIndex = 0;

//   slaides.forEach((item, index) => {
//     if (index <= count) {
//       //item.style.display = 'none'
//       item.remove();
//     }
//   });

//   const nextSlide = (slaides) => {
//     slaiderBlock.append(slaides);
//   };

//   const prevSlide = (slaides) => {
//     slaides.remove();
//   };

//   console.log(slaiderBlock);
//   console.log(slaides);
};

export default slaider;
