const menu = document.getElementById("toggle");
const myUl = document.querySelector(".nav-links");
menu.onclick = toggleMenu;

function toggleMenu() {
  if (myUl.classList.contains("mobile-nav")) {
    myUl.classList.remove("mobile-nav");
  } else {
    myUl.classList.add("mobile-nav");
  }
}

// header
const header = document.querySelector("#head");
var myElement = document.querySelector(".header");
window.onscroll = function () {
  const headOffsetTop = header.offsetTop;

  const headOuterHeight = header.offsetHeight;

  const windowHeight = this.innerHeight;

  const windowScrollTop = this.pageYOffset;

  if (windowScrollTop > headOffsetTop + headOuterHeight - windowHeight) {
    myElement.classList.add("actives");
  }
};
window.onc;
