Splitting();

const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "fade",
  loop: true,
  navigation: {
    prevEl: "#mainVisual .prev",
    nextEl: "#mainVisual .next",
  },
});

//f(x,y) = x+y*3; f(3,5) = 18

const gnbItem = document.querySelectorAll("#gnb .list > li");
//document.querySelectorAll(찾는거) // 배열처럼 생긴 nodeList를 리턴한다.
const header = document.querySelector("#header");
console.log(gnbItem);
console.log(gnbItem.length);
for (let i = 0; i < gnbItem.length; i++) {
  gnbItem[i].addEventListener("mouseenter", function () {
    header.classList.add("open");
  });
  gnbItem[i].addEventListener("mouseleave", function () {
    header.classList.remove("open");
  });
}

gsap.from("#mainVisual .slogan .main .char", { opacity: 0, x: 150, ease: "power4", duration: 1, stagger: 0.1 });
gsap.from("#mainVisual .slogan .sub .char", { opacity: 0, x: 150, ease: "power4", duration: 1, delay: 2, stagger: 0.02 });
