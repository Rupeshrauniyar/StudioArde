 gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
let tl1 = gsap.timeline({
scrollTrigger : {
trigger:'.page3',
scroller:".main",
start:'750vh center',
end:'3050vh center',
pin:".title",
}
},"same")


let tl2 = gsap.timeline({
scrollTrigger : {
trigger:'nav',
scroller:".main",
start:'2px 1vh',
end:'2px 1vh',
scrub:2,
}
},"same2")
tl2.to('nav img',{
y:"-70px",
},"same2")


let tl3 = gsap.timeline({
scrollTrigger : {
trigger:'.page1',
scroller:".main",
start:'50px top',
end:'2px bottom',
scrub:2,
duration:2,
}
},"same3")

tl3.to('.page1 .logo',{
x:"-400px",
y:"70px",
},"same3")

let tl4 = gsap.timeline({
scrollTrigger : {
trigger:'.page1',
scroller:".main",
start:'180px top',
end:'10px bottom',
scrub:2,
duration:2,
}
},"same4")

tl4.from('.img4 h3',{
opacity:0,
x:"-400px",
y:"-70px",
},"same4")

tl4.from('.img4-right .four',{
opacity:0,
},"same4")



let tl5 = gsap.timeline({
scrollTrigger : {
trigger:'.page1',
scroller:".main",
start:'1050vh center',
end:'1050 center',
scrub:2,
duration:2,
}
},"same5")

tl5.from('.page2 h3',{
opacity:0,
},"same5")


let tl6 = gsap.timeline({
scrollTrigger : {
trigger:'.page1',
scroller:".main",
start:'1770vh center',
end:'1770vh center',
scrub:2,
duration:2,
}
},"same6")

tl6.from('.page3 h3',{
opacity:0,
},"same6")
tl6.from('.page3 p',{
opacity:0,
},"same6")
