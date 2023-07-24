//
const filterSlider = document.querySelector(".catelog-content .filter-slider");
const listView = document.querySelector(".catelog-content .list-view");
const closeList = document.querySelector(
  ".catelog-content .list-view .close-button"
);

closeList.onclick = filterSlides;
filterSlider.onclick = filterSlides;

function filterSlides() {
  if (listView.classList.contains("active")) {
    listView.classList.remove("active");
  } else {
    listView.classList.add("active");
  }
}

// list view clicks
const category = document.querySelector(".list-view .category");
const categoryInfo = document.querySelector(".list-view .category-info");

category.onclick = angleUpCate;

function angleUpCate() {
  if (category.classList.contains("active")) {
    category.classList.remove("active");
    categoryInfo.classList.remove("active");
  } else {
    category.classList.add("active");
    categoryInfo.classList.add("active");
  }
}
//
const price = document.querySelector(".list-view .price");
const priceInfo = document.querySelector(".list-view .price-info");

price.onclick = angleUpPrice;

function angleUpPrice() {
  if (price.classList.contains("active")) {
    price.classList.remove("active");
    priceInfo.classList.remove("active");
  } else {
    price.classList.add("active");
    priceInfo.classList.add("active");
  }
}
//
const color = document.querySelector(".list-view .color");
const colorInfo = document.querySelector(".list-view .color-info");

color.onclick = angleUpColor;

function angleUpColor() {
  if (color.classList.contains("active")) {
    color.classList.remove("active");
    colorInfo.classList.remove("active");
  } else {
    color.classList.add("active");
    colorInfo.classList.add("active");
  }
}
//
const filtername = document.querySelector(".list-view .filter-name");
const filternameInfo = document.querySelector(".list-view .filter-name-info");

filtername.onclick = angleUpfiltername;

function angleUpfiltername() {
  if (filtername.classList.contains("active")) {
    filtername.classList.remove("active");
    filternameInfo.classList.remove("active");
  } else {
    filtername.classList.add("active");
    filternameInfo.classList.add("active");
  }
}
//
const gridSystem = document.querySelector(".grid-system");
const rowSystem = document.querySelector(".row-system");
const gridCards = document.querySelector(".grid-cards");
const rowCards = document.querySelector(".row-cards");

gridSystem.onclick = sortActives;
rowSystem.onclick = sortActives;

function sortActives() {
  if (gridSystem.classList.contains("sort-active")) {
    rowSystem.classList.add("sort-active");
    gridSystem.classList.remove("sort-active");
    gridCards.classList.remove("active-cards");
    rowCards.classList.add("active-cards");
  } else {
    rowSystem.classList.remove("sort-active");
    gridSystem.classList.add("sort-active");
    rowCards.classList.remove("active-cards");
    gridCards.classList.add("active-cards");
  }
}

//
const cardsR = document.querySelectorAll(".row-cards .card .hover-activity");

cardsR.forEach((item) => {
  var icon = document.createElement("i");
  icon.className = "fa-solid fa-envelope fa-lg activity-icon";
  item.appendChild(icon);
});

// cart add
const gridCartadd = document.querySelectorAll(".grid-cards .add-cart");

let sameProduct = 0;

gridCartadd.forEach((cartlink) => {
  cartlink.addEventListener("click", function () {
    // same pro
    // sameProduct++;
    // console.log(`this + ${sameProduct}`);
    // vibe cart icon
    document.querySelector(".fa-cart-shopping").classList.add("active");
    // Get Cart Img When click
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
    // remove All
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
    // for (let i = 0; i < allCartContent.length; i++) {
    //   if (i > 3) {
    //     allCartContent[i++].remove();
    //   }
    // }
  });
});

// cart add
const rowCartadd = document.querySelectorAll(
  ".row-cards .card-tools .add-cart"
);

rowCartadd.forEach(function (link) {
  link.addEventListener("click", function () {
    // vibe cart icon
    document.querySelector(".fa-cart-shopping").classList.add("active");
    //
    const imgCartre =
      this.parentElement.parentElement.parentElement.children[0].children[0].cloneNode(
        true
      );
    // Get Cart text When Click Adding
    const textCart =
      this.parentElement.parentElement.children[1].children[0].cloneNode(true);
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
    imgCartre.style.cssText = "width: 50px;";
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
    cartContent.appendChild(imgCartre);
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
