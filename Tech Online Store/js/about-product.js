const productInfo = document.querySelectorAll(".product-info li a");

productInfo.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      return false;
    } else {
      removeAll();
      item.classList.add("active");
    }
  });
});

function removeAll() {
  productInfo.forEach((item) => {
    item.classList.remove("active");
  });
  aboutProInfo.classList.remove("active");
  detailProInfo.classList.remove("active");
  specsProInfo.classList.remove("active");
}

const aboutProducter = document.querySelector(".about-product .about-pro");
const aboutProInfo = document.querySelector(".product-content .about-pro");

aboutProducter.onclick = () => {
  aboutProInfo.classList.add("active");
};

const detailProducter = document.querySelector(".about-product .detail");
const detailProInfo = document.querySelector(".product-content .details");

detailProducter.onclick = () => {
  detailProInfo.classList.add("active");
};
const specsProducter = document.querySelector(".about-product .specs");
const specsProInfo = document.querySelector(".product-content .space");

specsProducter.onclick = () => {
  specsProInfo.classList.add("active");
};
