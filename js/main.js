const header = document.querySelector(".landing .heading-text");

const aboutSection = document.querySelector(".about ");
window.onscroll = function () {
  const aboutOffsetTop = aboutSection.offsetTop;

  const aboutOuterHeight = aboutSection.offsetHeight;

  const windowHeight = this.innerHeight;

  const windowScrollTop = this.pageYOffset;

  if (windowScrollTop > aboutOffsetTop + aboutOuterHeight - windowHeight) {
    aboutSection.classList.add("opacity");
    const contactSection = document.querySelector(".contact");
    contactSection.classList.add("opacity-two");
  }
};
