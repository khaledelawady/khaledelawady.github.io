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
}
