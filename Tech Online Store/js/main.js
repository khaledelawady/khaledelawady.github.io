//////////////////////////////////

// Index => main.js

/////////////////////////////////

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

// add cart
const addCartMain = document.querySelectorAll(".main_ .add-cart");

addCartMain.forEach((cartlink) => {
  cartlink.addEventListener("click", function () {
    // vibe cart icon
    document.querySelector(".fa-cart-shopping").classList.add("active");
    // Get Cart Img When Click Adding
    const imgCart = this.parentElement.children[2].cloneNode(true);
    // Get Cart text When Click Adding
    const textCart = this.parentElement.children[4].cloneNode(true);
    const cartContent = document.createElement("div");
    const countProducter = document.createElement("span");
    const Icons = document.createElement("div");
    const cancelIcon = document.createElement("i");
    const cancelLink = document.createElement("a");
    const editIcon = document.createElement("i");
    const editLink = document.createElement("a");
    cartContent.className = "cart-content";
    cartContainer.style.cssText =
      "display: flex;flex-direction: column;gap: 10px;";
    cartContent.style.cssText =
      "display: flex;align-items: center;gap: 10px; width: fit-content;border-top: 2px solid var(--text-color);padding: 20px 10px;";
    countProducter.textContent = "x1";
    imgCart.style.cssText = "width: 50px;";
    textCart.style.cssText = "font-size: 14px;font-weight: 500;";
    Icons.style.cssText = "display: flex;flex-direction: column;gap: 10px;";
    cancelIcon.className = "fa-solid fa-xmark";
    cancelLink.href = "##";
    cancelLink.onclick = removeCountPro;
    cancelLink.style.cssText =
      "padding: 4px; border: 2px solid var(--text-color); border-radius: 50%;color: var(--text-color);font-size: 12px;cursor: pointer;";
    editIcon.className = "fa-solid fa-pencil";
    editLink.href = "##";
    editLink.style.cssText =
      "padding: 4px; border: 2px solid var(--text-color); border-radius: 50%;color: var(--text-color);font-size: 12px;cursor: pointer;";
    cartContent.appendChild(countProducter);
    cartContent.appendChild(imgCart);
    cartContent.appendChild(textCart);
    cartContent.appendChild(textCart);
    cancelLink.appendChild(cancelIcon);
    editLink.appendChild(editIcon);
    Icons.appendChild(cancelLink);
    Icons.appendChild(editLink);
    cartContent.appendChild(Icons);
    cartContainer.appendChild(cartContent);
    // big cart
    const cartProductContainer = document.querySelector(
      ".cart-products-container"
    );
    const bigCart = cartContent.cloneNode(true);
    bigCart.childNodes[1].style.width = "100px";
    bigCart.childNodes[0].style.fontSize = "16px";
    bigCart.childNodes[3].childNodes[0].style.padding = "4px 6px";
    bigCart.childNodes[3].childNodes[0].onclick = removeCountPro;
    cartProductContainer.appendChild(bigCart);
    // remove
    function removeCountPro() {
      bigCart.remove();
      cartContent.remove();
      countElementMin();
    }
    // less than 3 div in hover cart
    // const allCartContent = document.querySelectorAll(".cart-content");
    // if (allCartContent.length > 2) {
    //   allCartContent[3].remove();
    // }
  });
});
