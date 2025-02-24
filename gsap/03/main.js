// gsap.registerPlugin(SplitText) 
var split = new SplitText("#quote", {type: "chars"});
//now animate each character into place from 100px above, fading in:
gsap.from(split.chars, {
  duration: 1, 
  y: 100, 
  autoAlpha: 0, 
  stagger: 0.05
});

// gsap.to("#box3", {
//     scrollTrigger:"#box3",
//     x:700,
//     rotations:360,
//     durations:3
// })

// gsap.to("#box3" , {
//     scrollTrigger: {
//         trigger:"#box3",
//         markers:true,
//         // toggleActions: "restart none none none"
//         // start:"top center"
//         scrub: 3
//     },
//     x:1400,
//     rotations:360,
//     duration:3
// })

