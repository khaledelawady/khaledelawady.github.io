const landing = document.querySelector(".landing");
window.onscroll = function () {
  const landTopheight = landing.offsetHeight;

  const landOuterheight = landing.offsetTop;

  const windowHeight = this.innerHeight;

  const windowTopScroll = this.pageYOffset;

  if (windowTopScroll > landTopheight + landOuterheight - windowHeight) {
    const navBar = document.querySelector(".navbar");
    navBar.classList.add("activer");
  }
};

const menu = document.querySelector(".landing .landing-images");
const spicy = document.querySelector(".landing-event");
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5;

menu.addEventListener("mousemove", (a) => {
  const mouseXT = a.clientX / windowWidth;
  const mouseYT = a.clientY / windowHeight;

  menu.style.transform = `translate3d(-${mouseXT}%, -${mouseYT}%, 0)`;
});
spicy.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;

  spicy.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});
