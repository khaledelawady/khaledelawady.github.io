// slider img
var imgSlider = Array.from(document.querySelectorAll(".slide-img"));

var slidesCount = imgSlider.length;

var currentSlide = 1;
var lastIndex = slidesCount - 1;

var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

theChecker();

setInterval(() => {
  if (nextBtn.classList.contains("disable")) {
    return false;
    clearInterval();
  } else {
    currentSlide++;
    theChecker();
  }
}, 5000);

function nextSlide() {
  if (nextBtn.classList.contains("disable")) {
    return false;
  } else {
    clearInterval();
    currentSlide++;
    theChecker();
  }
}
function prevSlide() {
  if (prevBtn.classList.contains("disable")) {
    return false;
  } else {
    clearInterval();
    currentSlide--;
    theChecker();
  }
}

function theChecker() {
  removeAll();
  imgSlider[currentSlide - 1].classList.add("active");
  if (currentSlide === 1) {
    prevBtn.classList.add("disable");
  } else {
    prevBtn.classList.remove("disable");
  }
  if (currentSlide === slidesCount) {
    nextBtn.classList.add("disable");
  } else {
    nextBtn.classList.remove("disable");
  }
}
function removeAll() {
  imgSlider.forEach((img) => {
    img.classList.remove("active");
  });
}

// cart slider
var cardSliderContainer = document.querySelector(".product-slide");

setInterval(() => {
  if ((cardSliderContainer.style.cssText = "transform: translateX(0vh)")) {
    cardSliderContainer.style.cssText = "transform: translateX(-25vh)";
  }
}, 2000);
setInterval(() => {
  if ((cardSliderContainer.style.cssText = "transform: translateX(-25vh)")) {
    cardSliderContainer.style.cssText = "transform: translateX(-50vh)";
  }
}, 4000);
setInterval(() => {
  if ((cardSliderContainer.style.cssText = "transform: translateX(-50vh)")) {
    cardSliderContainer.style.cssText = "transform: translateX(-75vh)";
  }
}, 6000);
setInterval(() => {
  if ((cardSliderContainer.style.cssText = "transform: translateX(-75vh)")) {
    cardSliderContainer.style.cssText = "transform: translateX(-100vh)";
  }
}, 8000);

var nextBtnCard = document.getElementById("next-card");
var prevBtnCard = document.getElementById("prev-card");

var currentCard = (cardSliderContainer.style.cssText =
  "transform: translateX(-10%)");
nextBtnCard.onclick = nextSlideCard;
prevBtnCard.onclick = prevSlideCard;

function nextSlideCard() {
  if ((cardSliderContainer.style.cssText = "transform: translateX(-100vh)")) {
    return false;
  } else {
    currentCard++;
  }
}
function prevSlideCard() {
  if ((cardSliderContainer.style.cssText = "transform: translateX(0vh)")) {
    return false;
  } else {
    currentCard--;
  }
}

// messenger facebook
var maniSection = document.querySelector(".main");
var facebookIcon = document.createElement("i");

facebookIcon.className = "fa-brands fa-facebook-messenger";
maniSection.appendChild(facebookIcon);

// var monitorSection = document.querySelector(".msi-monitor");
// window.onscroll = () => {
//   const offsetTop = monitorSection.offsetTop;
//   const offsetOuterHeight = monitorSection.offsetHeight;
//   const windowHeight = window.innerHeight;
//   const windowYscroll = window.pageYOffset;
//   if (windowYscroll > offsetTop + offsetOuterHeight - windowHeight) {
//     facebookIcon.style.cssText = "display: block!important;";
//   }
// };

// brands
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector(".brands .container");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
