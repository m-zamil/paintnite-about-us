gsap.registerPlugin(ScrollTrigger);
var boxes = gsap.utils.toArray(".box");

boxes.forEach((box, i) => {

if(screen.width <=960){
  gsap.timeline({
    scrollTrigger: {
      trigger: ".boxes",
      start: "top 100%",
      end:"top 20%",
      scrub:0.3,
    },
    defaults:{duration: 1, ease:'none'}
  })
    .to(box, {
    y: (i, target) => -1.25 * target.dataset.s,
  });
}

  if (screen.width > 960){
    boxes.forEach((box, i) => {

        gsap.timeline({
          scrollTrigger: {
            trigger: ".boxes",
            start: "top 100%",
            end:"top 20%",
            scrub:0.3,
          },
          defaults:{duration: 1, ease:'none'}
        })
          .to(box, {
          y: (i, target) => -2.5 * target.dataset.s,
        });
      });
}
})
//initialize slider

new Glide(".glide", {
  type: "carousel",
  gap: 20,
  autoplay: 4000,
  hoverpause: true,
  keyboard: true,
  perView: 1.26,
  focusAt: "center",

}).mount();

//Script for equal reason cards heights


if (screen.width <= 960){


function normaliseSlideHeight(selector) {

  const slides = document.querySelectorAll(selector);
  const slideHeights = [];

  slides.forEach((slide) => slideHeights.push(slide.scrollHeight));

  const tallestSlideHeight = Math.max(...slideHeights);

  slides.forEach((slide) => slide.style.minHeight = tallestSlideHeight + 'px');
}

setTimeout(() => { normaliseSlideHeight('.reason__card'); }, 75);
}

function scrollIntoView(selectorId) {
  document.getElementById(selectorId).scrollIntoView();
} 