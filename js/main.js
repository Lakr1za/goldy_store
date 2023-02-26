var swiper = new Swiper(".Rings", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },  
    navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev'
    },

});

const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}



var swiper = new Swiper('.main-slider', {
   
  
    slidesPerView: 4,
       spaceBetween: 15,
      centeredSlides: false,
      pagination: '.swiper-pagination',
      type: 'bullets',
  clickable: true,
});
// var mainSwiper = new Swiper('.main-slider', {
//   slidesPerView: 4,
//   spaceBetween: 15,
//   centeredSlides: false,
//   nextButton: '.uploaded-in-next',
//   prevButton: '.uploaded-in-prev',
// });

var swiper = new Swiper('.block-slider', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },  
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
      type: 'bullets',
  clickable: true,
});



$(document).ready(function(){
  //Single Item 
  $('.single-item').slick({
        infinite: true,
        dots: true,
        
  });
  
});

// var mainSecondSwiper = new Swiper('.block-slider', {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   centeredSlides: false,
//   nextButton: '.next-btn',
//   prevButton: '.prev-btn',
//   pagination: '.swiper-pagination',
//   type: 'bullets',
//   clickable: true,
// });

