let myfun = () => console.log("Function Called");


// To
// gsap.to("#box1", {x:300 , y:200})

// gsap.to("#box1", {
//      x:800, 
//      rotation:360 , 
//      duration:2 , 
//     //  delay: 3, 
//     //  repeat: 2, 
//     //  yoyo: true, 
//     // ease: "bounce.out"
//     // runBackwards:true,
//     // starAtat: { x:-100},
//     // opacity:0,
//     // scale: 1.5
//     // backgroundColor: 'red'
//      // color:"red"

//     })


// let tween = gsap.to("#box1", {
//      x:700,
//      rotation:360,
//      duration:10,
//      onComplete : myfun
// })

// document.getElementById("play").onclick = () => tween.play()
// document.getElementById("pause").onclick = () => tween.pause()


// From

// gsap.from("#box1", {x:700 , y:700})

// gsap.from("#box1", {
//      x:800, 
//      rotation:360 , 
//      duration:2 , 
//     //  delay: 3, 
//     //  repeat: 2, 
//     //  yoyo: true, 
//     // ease: "bounce.out"
//     // runBackwards:true,
//     // starAtat: { x:-100},
//     // opacity:0,
//     // scale: 1.5
//     // backgroundColor: 'red'
//      // color:"red"

//     })


// Timeline
// gsap.to("#box1", {
//      x:700,
//      rotation:360,
//      delay: 1,
//      duration:2 , 
// })
// gsap.to("#box2", {
//      x:700,
//      rotation:360,
//      delay: 2,
// })
// gsap.to("#box3", {
//      x:700,
//      rotation:360,
//      delay: 3,
// })


// Fix above issue using Timeline
// let ti = gsap.timeline()
// ti.to("#box1", {x:700, rotation:360, duration:2 ,  });
// ti.to("#box2", {x:700, rotation:360});
// ti.to("#box3 ", {x:700, rotation:360});

// let ti = gsap.timeline({repeat:2, yoyo:true})
// ti.to("#box1", {x:700, rotation:360, duration:2 ,  });
// ti.to("#box2", {x:700, rotation:360});
// ti.to("#box3 ", {x:700, rotation:360});