const emailRequired = document.querySelector(".email-required");

const email = document.getElementById("email");
///

const subBtn = document.querySelector(".subscribe-button");
const disBtn = document.querySelector(".dismiss-button");
const overlay = document.querySelector(".overlay");
const successInfo = document.querySelector(".success-info");

const emailRe = /(ash@loremcompany\.com)/;
email.onblur = () => {
  const emailValue = email.value;
  const validResult = emailRe.test(emailValue);
  //??
  if (email.value === "") {
    addAll();
  } else if (email.value !== "") {
    removeAll();
  }

  //email testing
  if (validResult === false) {
    addAll();
    subBtn.onclick = function () {
      if (overlay.classList.contains("active")) {
        overlay.classList.remove("active");
        successInfo.classList.add("disable");
      }
    };
  } else if (validResult === true) {
    removeAll();
    subBtn.onclick = function () {
      if (overlay.classList.contains("active")) {
        overlay.classList.remove("active");
        successInfo.classList.add("disable");
      } else {
        overlay.classList.add("active");
        successInfo.classList.add("active");
      }
    };
  }
};

function addAll() {
  emailRequired.classList.add("active");
  email.classList.add("active");
}
function removeAll() {
  emailRequired.classList.remove("active");
  email.classList.remove("active");
}

// dismiss button

disBtn.onclick = function () {
  overlay.classList.remove("active");
  successInfo.classList.remove("active");
};
