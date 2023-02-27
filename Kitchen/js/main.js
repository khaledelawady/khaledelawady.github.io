const pageBody = document.querySelector("body");

//Header
const pageHeader = document.createElement("header");
pageHeader.style = "background-color: var(--main-color); padding: 20px 15px;";
pageBody.appendChild(pageHeader);

//Brand
const brandText = document.createElement("div");
brandText.className = "logo";
brandText.innerHTML = `<h2>Brand</h2>`;
pageHeader.appendChild(brandText);

//Nav bar
const pageNav = document.createElement("nav");
pageNav.className = "nav-bar";
pageNav.style = "padding: 20px; background-color: #000; transition: 0.5s;";
pageBody.appendChild(pageNav);

//Brand
const brandNav = document.createElement("div");
brandNav.className = "logo";
brandNav.innerHTML = `<h2>Brand</h2>`;
brandNav.style = "color: var(--main-color); display: none;";
pageNav.appendChild(brandNav);

//Ul links
const ul = document.createElement("ul");
ul.className = "ul-links";
createNavLink("Home");
createNavLink("About Us");
createNavLink("Contact");

ul.style =
  "display: flex; justify-content: end; list-style: none; margin: 0; gap: 20px; transition: 0.5s;";
function createNavLink(txt) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.style = "text-decoration: none; color: #ccc; transition: 0.5s;";
  a.addEventListener(
    "mouseover",
    (hover) => {
      hover.target.style =
        "text-decoration: none; transition: 0.5s; color: var(--main-color);";
      setTimeout(() => {
        hover.target.style =
          "text-decoration: none; color: #ccc; transition: 0.5s;";
      }, 500);
    },
    false
  );
  a.append(document.createTextNode(txt));
  li.appendChild(a);
  ul.appendChild(li);
}

pageNav.appendChild(ul);

//manu bar mobile
const menuBar = document.createElement("div");
menuBar.className = "menu-bar";
menuBar.style =
  "transition: 0.5s; position: relative; height: 32px; width: 36px; cursor: pointer; display: none; left: 90%;";

pageNav.appendChild(menuBar);
const menuBarO = document.createElement("span");
const menuBarT = document.createElement("span");
const menuBarH = document.createElement("span");
menuBarO.style =
  "transition: 0.5s; position: absolute; width: 100%; left: 0; background-color: #fff; height: 4px; top: 0;";
menuBarT.style =
  "transition: 0.5s; position: absolute; width: 100%; left: 0; background-color: #fff; height: 4px; top: 14px;";
menuBarH.style =
  "transition: 0.5s; position: absolute; width: 100%; left: 0; background-color: #fff; height: 4px; top: 28px;";
menuBar.appendChild(menuBarO);
menuBar.appendChild(menuBarT);
menuBar.appendChild(menuBarH);

menuBar.onclick = function () {
  menuBarO.style =
    "transition: 0.5s; position: absolute; width: 100%; left: 0; background-color: #fff; height: 4px; top: 14px; transform: rotate(45deg);";
  menuBarT.style =
    "transition: 0.5s; position: absolute; width: 100%; left: 0; background-color: #fff; height: 4px; top: 14px; opacity: 0;";
  menuBarH.style =
    "transition: 0.5s; position: absolute; width: 100%; left: 0; background-color: #fff; height: 4px; top: 14px; transform: rotate(-45deg);";
  ul.style =
    "display: flex !important; justify-content: end; list-style: none; margin: 0; gap: 20px; flex-direction: column; align-items: center; transition: 0.5s;";
};
// if (menuBar.onclick === true) {
//   menuBarO.style =
//     "transition: 0.5s; position: absolute; width: 100%; left: 0; background-color: #fff; height: 4px; top: 0px;";
//   menuBarT.style =
//     "transition: 0.5s; position: absolute; width: 100%; left: 0; background-color: #fff; height: 4px; top: 14px;";
//   menuBarH.style =
//     "transition: 0.5s; position: absolute; width: 100%; left: 0; background-color: #fff; height: 4px; top: 28px;";
//   ul.style =
//     "display: none !important; justify-content: end; list-style: none; margin: 0; gap: 20px; flex-direction: column; align-items: center; transition: 0.5s;";
// }

//landing page
const main = document.createElement("main");
const landing = document.createElement("section");
landing.className = "landing";
landing.style =
  "height: 100vh; position: relative; background-image: url(./imags/img-7.jpg); background-size: cover;";
//info landing
const landInfo = document.createElement("div");
const heading = document.createElement("h3");
const paragh = document.createElement("p");
const join = document.createElement("a");

const textHeading = document.createElement("h1");
textHeading.className = "brand-text";
textHeading.setAttribute("data-text", "BRAND");
textHeading.textContent = "BRAND";
textHeading.style =
  "position: absolute; bottom: -32px; left: 50%; transform: translateX(-50%); font-size: 120px; -webkit-text-fill-color: transparent;";

const span = document.createElement("span");
landInfo.className = "landing-info";
landInfo.style =
  "padding: 20px; position: relative; display: flex; flex-direction: column; width: 350px; align-items: center; top: 40%; transform: translateY(-50%); gap: 18px;";

heading.textContent = "Eat And Discover Your";
heading.style = "font-size: 53px; font-weight: 500;";

paragh.textContent = "Wellcome my friend to your kitchen";
paragh.style =
  "font-size: 16px; font-weight: 500; color: #222; letter-spacing: 2px;";

span.textContent = " Recipe";
span.style.color = "var(--scound-color)";

join.href = "#";
join.textContent = "Join Now";
join.style =
  "padding: 10px 22px; background-color: var(--main-color); color: black; border-radius: 3px; font-weight: 900;";
join.addEventListener(
  "mouseover",
  (hover) => {
    hover.target.style =
      "transition: 0.5s; padding: 10px 22px; background-color: var(--scound-color); color: black; border-radius: 3px; font-weight: 900;";
    setTimeout(() => {
      hover.target.style =
        "transition: 0.5s; padding: 10px 22px; background-color: var(--main-color); color: black; border-radius: 3px; font-weight: 900;";
    }, 1000);
  },
  false
);

landInfo.appendChild(heading);
heading.appendChild(span);
landInfo.appendChild(paragh);
landInfo.appendChild(join);
landing.appendChild(landInfo);
landing.appendChild(textHeading);
main.appendChild(landing);
pageBody.appendChild(main);
window.onscroll = function () {
  const landingOffsetHeight = landing.offsetHeight;

  const landingOuterTop = landing.offsetTop;

  const windowHeight = this.innerHeight;

  const windowScrollTop = this.pageYOffset;

  if (windowScrollTop > landingOffsetHeight + landingOuterTop - windowHeight) {
    pageNav.classList.add("active");
    brandNav.style = "color: var(--main-color); display: flex;";
    menuBar.style =
      "transition: 0.5s; position: fixed; height: 32px; width: 36px; cursor: pointer; display: flex; left: 90%;";
  }
  if (windowScrollTop === 0) {
    pageNav.classList.remove("active");
    brandNav.style = "color: var(--main-color); display: none;";
    menuBar.style =
      "transition: 0.5s; position: relative; height: 32px; width: 36px; cursor: pointer; display: none; left: 90%;";
  }
};
document.body.prepend(pageHeader, pageNav, main);
