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
    y: (i, target) => -1 * target.dataset.s,
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
          y: (i, target) => -2 * target.dataset.s,
        });
      });
}

})


