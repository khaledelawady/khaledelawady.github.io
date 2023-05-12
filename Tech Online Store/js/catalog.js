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
