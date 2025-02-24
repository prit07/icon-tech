var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
}});

tl.
to("#top", {
  top:"-50%"
}, 'a')
.to("#bottom", {
    bottom:"-50%"
}, 'a')
.to("#top-h", {
    top:"80%"
}, 'a')
.to("#bottom-h", {
    bottom:"-35%"
}, 'a')

.to("#center-h1",{
    top: "-30%"
 },'a')
 .to(".content",{
    delay: -0.2,
    marginTop: "0%"
 })