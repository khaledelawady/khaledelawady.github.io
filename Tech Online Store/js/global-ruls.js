// loader
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});

// drop down header
const anotherClock = document.querySelector(".another-clock");
const Drophead = document.querySelector(".clock");
const iconDrophead = document.querySelector(".icon-arrow");

Drophead.onclick = dropClicker;
iconDrophead.onclick = dropClicker;

function dropClicker() {
  if (anotherClock.classList.contains("active")) {
    anotherClock.classList.remove("active");
    iconDrophead.classList.remove("arrow");
  } else {
    anotherClock.classList.add("active");
    iconDrophead.classList.add("arrow");
  }
}
// nav active
const header = document.querySelector(".navbar");

window.onscroll = function () {
  const headerOffsetTop = header.offsetTop;

  const headerOuterHeight = header.offsetHeight;

  const windowHeight = this.innerHeight;

  const windowScrollTop = this.pageYOffset;
  const navbar = document.querySelector("nav");
  if (windowScrollTop > headerOffsetTop + headerOuterHeight - windowHeight) {
    navbar.classList.add("active-nav");
  }
  if (windowScrollTop === headerOffsetTop) {
    navbar.classList.remove("active-nav");
  }
};

// menu toggle
const toggleMenu = document.getElementById("toggle-menu");
const toggleContent = document.querySelector(".toggle-content");
const navLinks = document.querySelector(".nav-links");
const navBarlinks = document.querySelector(".nav-bar-links");

toggleMenu.onclick = toggleFunction;

function toggleFunction() {
  if (toggleMenu.dataset.showen === "false") {
    toggleMenu.classList.add("event");
    Overlay.style.display = "block";
    toggleContent.style.cssText = "left: 0;";
    toggleMenu.dataset.showen = "true";
    navLinks.classList.add("display");
    toggleContent.appendChild(navLinks);
  } else {
    Overlay.addEventListener("click", (overlay) => {
      overlay.target.style.display = "none";
      cartProduct.style.right = "-100%";
      toggleMenu.classList.remove("event");
      navLinks.classList.remove("display");
      Overlay.style.display = "none";
      toggleContent.style.cssText = "left: -100%;";
      toggleMenu.dataset.showen = "false";
      navBarlinks.appendChild(navLinks);
    });
    toggleMenu.classList.remove("event");
    navLinks.classList.remove("display");
    Overlay.style.display = "none";
    toggleContent.style.cssText = "left: -100%;";
    toggleMenu.dataset.showen = "false";
    navBarlinks.appendChild(navLinks);
  }
}
// profile account
const profileAccountBtn = document.getElementById("btn-profile");
const profileAccountMenu = document.getElementById("drop-profile");

profileAccountBtn.onclick = profileMenu;

function profileMenu() {
  if (profileAccountMenu.style.cssText === "display: none;") {
    profileAccountMenu.style.cssText = "display: flex;";
  } else {
    profileAccountMenu.style.cssText = "display: none;";
  }
}

// nav bar click
const navLink = document.querySelectorAll(".nav-links .link");
const lapMenu = document.querySelector(".nav-links .laptops-menu");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
      lapMenu.classList.remove("active");
    } else {
      link.classList.add("active");
      lapMenu.classList.add("active");
    }
  });
});
// cart btn
const cartBtn = document.getElementById("cart-btn");
const cartCancel = document.querySelector(".cart-product .cart-cancel");
var Overlay = document.querySelector(".navbar .overlay");
cartBtn.onclick = cartDisplay;

const cartProduct = document.querySelector(".navbar .cart-product");
function cartDisplay() {
  cartProduct.style.right = "0";
  Overlay.style.display = "block";
  if (Overlay.style.display === "block") {
    Overlay.addEventListener("click", (overlay) => {
      overlay.target.style.display = "none";
      cartProduct.style.right = "-100%";
    });
    cartCancel.onclick = () => {
      Overlay.style.display = "none";
      cartProduct.style.right = "-100%";
    };
  }
}

// search btn
const searchBtn = document.getElementById("search-btn");
const searchContent = document.getElementById("search");
const logo = document.querySelector(".nav-bar-links .logo");
searchBtn.onclick = searchEvent;
var x = window.matchMedia("(max-width: 992px)");
function searchEvent() {
  var navLinks = document.querySelector(".nav-links");
  if (navLinks.style.display === "none") {
    navLinks.style.display = "flex";
    searchContent.style.display = "none";
    searchBtn.classList.remove("active");
    header.style.cssText = "padding: 6px 0;";
    logo.style.display = "block";
    if (x.matches) {
      toggleMenu.style.display = "flex";
    }
  } else {
    navLinks.style.display = "none";
    searchContent.style.display = "block";
    searchBtn.classList.add("active");
    logo.style.display = "none";
    header.style.cssText = "padding: 25px 0;";
    if (x.matches) {
      toggleMenu.style.display = "none";
    }
  }
}

// cart
const addingCart = document.querySelectorAll(".add-cart");
const cartImg = document.querySelectorAll(".card .card-img");
const itemsCartcounts = document.querySelector(".btn-cart .drop-count");
const cartContainer = document.querySelector(".btn-cart .cart-products");
const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelectorAll(".card .card-container");

let countElements = 0;

function countElementMin() {
  countElements--;
  itemsCartcounts.innerHTML = `${countElements} items in cart`;
  cartBtn.setAttribute("data-cart", countElements);
}

let cardsID = 0;

addingCart.forEach((cartlink) => {
  cartlink.onclick = cartAddBtn;
  cartlink.setAttribute("href", "##");
});
function cartAddBtn() {
  countElements++;
  itemsCartcounts.innerHTML = `${countElements} items in cart`;
  cartBtn.setAttribute("data-cart", countElements);
}
cards.forEach((card) => {
  cardsID++;
  card.setAttribute("data-id", cardsID);
});
cartImg.forEach((img) => {
  img.addEventListener("click", () => {
    location.href =
      "https://khaledelawady.github.io/Tech%20Online%20Store/catelog.html";
  });
});

// footer Info
const footerTitleInfo = document.querySelector(
  ".footer .footer-links .information .col-title"
);
const footerLinksInfo = document.querySelector(
  ".footer .footer-links .information .col-links"
);
const footerAngelInfo = document.querySelector(
  ".footer .footer-links .information .col-title .angel"
);

footerTitleInfo.onclick = activeFooterInfo;

function activeFooterInfo() {
  if (footerAngelInfo.classList.contains("active")) {
    footerAngelInfo.classList.remove("active");
    footerLinksInfo.classList.remove("active");
  } else {
    footerAngelInfo.classList.add("active");
    footerLinksInfo.classList.add("active");
  }
}
// footer ports
const footerTitlePorts = document.querySelector(
  ".footer .footer-links .ports .col-title"
);
const footerLinksPorts = document.querySelector(
  ".footer .footer-links .ports .col-links"
);
const footerAngelPorts = document.querySelector(
  ".footer .footer-links .ports .col-title .angel"
);

footerTitlePorts.onclick = activeFooterPorts;

function activeFooterPorts() {
  if (footerAngelPorts.classList.contains("active")) {
    footerAngelPorts.classList.remove("active");
    footerLinksPorts.classList.remove("active");
  } else {
    footerAngelPorts.classList.add("active");
    footerLinksPorts.classList.add("active");
  }
}
// footer DeskLap
const footerTitleDesk = document.querySelector(
  ".footer .footer-links .desktops .col-title"
);
const footerLinksDesk = document.querySelector(
  ".footer .footer-links .desktops .col-links"
);
const footerAngelDesk = document.querySelector(
  ".footer .footer-links .desktops .col-title .angel"
);

footerTitleDesk.onclick = activeFooterDesk;

function activeFooterDesk() {
  if (footerAngelDesk.classList.contains("active")) {
    footerAngelDesk.classList.remove("active");
    footerLinksDesk.classList.remove("active");
  } else {
    footerAngelDesk.classList.add("active");
    footerLinksDesk.classList.add("active");
  }
}
// footer Lap
const footerTitleLap = document.querySelector(
  ".footer .footer-links .laptops .col-title"
);
const footerLinksLap = document.querySelector(
  ".footer .footer-links .laptops .col-links"
);
const footerAngelLap = document.querySelector(
  ".footer .footer-links .laptops .col-title .angel"
);

footerTitleLap.onclick = activeFooterLap;

function activeFooterLap() {
  if (footerAngelLap.classList.contains("active")) {
    footerAngelLap.classList.remove("active");
    footerLinksLap.classList.remove("active");
  } else {
    footerAngelLap.classList.add("active");
    footerLinksLap.classList.add("active");
  }
}
// footer address
const footerTitleAdd = document.querySelector(
  ".footer .footer-links .address .col-title"
);
const footerLinksAdd = document.querySelector(
  ".footer .footer-links .address .col-links"
);
const footerAngelAdd = document.querySelector(
  ".footer .footer-links .address .col-title .angel"
);

footerTitleAdd.onclick = activeFooterAdd;

function activeFooterAdd() {
  if (footerAngelAdd.classList.contains("active")) {
    footerAngelAdd.classList.remove("active");
    footerLinksAdd.classList.remove("active");
  } else {
    footerAngelAdd.classList.add("active");
    footerLinksAdd.classList.add("active");
  }
}

// To Up BTN
const toUpBtn = document.querySelector(".to-up-btn");
window.onscroll = () => {
  if (this.scrollY >= 600) {
    toUpBtn.classList.add("active");
  } else {
    toUpBtn.classList.remove("active");
  }
};

toUpBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
