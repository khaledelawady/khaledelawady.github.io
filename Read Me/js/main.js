const kidsSection = document.querySelector(".landing .landing-heading");
window.onscroll = function () {
  const kidsOffsetTop = kidsSection.offsetTop;

  const kidsOuterHeight = kidsSection.offsetHeight;

  const windowHeight = this.innerHeight;

  const windowScrollTop = this.pageYOffset;

  const kidsTop = document.querySelector(".kid-top");
  const kidsDown = document.querySelector(".kid-down");
  const kidsTopT = document.querySelector(".kid-top-2");
  const kidsDownT = document.querySelector(".kid-down-2");
  if (windowScrollTop > (kidsOffsetTop + kidsOuterHeight - windowHeight)) {
    kidsTop.classList.add("opacity");
    kidsDown.classList.add("opacity-two");
    kidsTopT.classList.add("opacity");
    kidsDownT.classList.add("opacity-two");
  }
};
