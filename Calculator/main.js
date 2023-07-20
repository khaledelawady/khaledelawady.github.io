// Array contain numbers on click
const resultInput = Array.from(document.getElementById("text"));

// input to get values
const resultIn = document.getElementById("text");

// all numbers buttons
const numBtn = document.querySelectorAll(".num");

// all buttons to event active
// const allBtnTools = document.querySelectorAll(".calc .tools button");
// const allBtnNum = document.querySelectorAll(".calc .num-box button");

// allBtnNum.forEach((nu) => {
//   nu.onclick = () => {
//     console.log("tools");
//     if (nu.classList.contains("active")) {
//       return false;
//     } else {
//       removeAllActiveEvent();
//       this.classList.add("active");
//     }
//   };
// });

// allBtnTools.forEach((n) => {
//   n.onclick = () => {
//     console.log("tool");
//     if (n.classList.contains("active")) {
//       return false;
//     } else {
//       removeAllActiveEvent();
//       n.classList.add("active");
//     }
//   };
// });

// function removeAllActiveEvent() {
//   allBtnNum.forEach((nu) => {
//     nu.classList.remove("active");
//   });
//   allBtnTools.forEach((n) => {
//     n.classList.remove("active");
//   });
// }
// num click event to add numbers to input Array
numBtn.forEach((num) => {
  num.onclick = () => {
    var numClone = num.cloneNode(true);
    resultInput.push(numClone.textContent);
    resultIn.value = resultInput.join("");
  };
});

// plus event
const plus = document.querySelector(".plus");
var resultInV = resultIn.value;

var arrayPlus = [];

plus.onclick = () => {
  arrayPlus.push(resultIn.value);
  resultIn.value = "";
  resultInput.length = 0;
  // console.log(arrayPlus);
};

// minus event
const minus = document.querySelector(".minus");
var arrayMinus = [];

minus.onclick = () => {
  arrayMinus.push(resultIn.value);
  resultIn.value = "";
  resultInput.length = 0;
  // console.log(arrayMinus);
};

// multiplication event
const multi = document.querySelector(".multiplication");
var arrayMulti = [];

multi.onclick = () => {
  arrayMulti.push(resultIn.value);
  resultIn.value = "";
  resultInput.length = 0;
  // console.log(arrayMulti);
};

// divide event
const divide = document.querySelector(".divide");
var arrayDivide = [];

divide.onclick = () => {
  arrayDivide.push(resultIn.value);
  resultIn.value = "";
  resultInput.length = 0;
  // console.log(arrayDivide);
};

// equal event
const equal = document.querySelector(".equals");

equal.onclick = () => {
  // plus event
  let arrayEqualPlus =
    Number.parseInt(arrayPlus[0]) + Number.parseInt(arrayPlus);
  // console.log(`this is from ${arrayPlus.copyWithin(0, arrayPlus[length - 1])}`);
  // minus event
  let arrayEqualMinus =
    Number.parseInt(arrayMinus[0]) - Number.parseInt(arrayMinus[1]);
  // console.log(arrayEqualMinus);
  // multi event
  let arrayEqualMulti =
    Number.parseInt(arrayMulti[0]) * Number.parseInt(arrayMulti[1]);
  // console.log(arrayEqualMulti);
  // divide event
  let arrayEqualDivide =
    Number.parseInt(arrayDivide[0]) / Number.parseInt(arrayDivide[1]);
  // console.log(arrayEqualDivide);
  // clear input value
  resultIn.value = "";
  resultInput.length = 0;
  //replace the result in the input value
  resultIn.value =
    arrayEqualPlus || arrayEqualMinus || arrayEqualMulti || arrayEqualDivide;

  // resultIn.value = arrayEqualMinus;

  // resultIn.value = arrayEqualMulti;
};

// AC to clear all Array numbers
const AC = document.querySelector(".ac");

AC.onclick = () => {
  resultInput.length = 0;
  resultIn.value = "";
  arrayPlus.length = 0;
  arrayMinus.length = 0;
  arrayMulti.length = 0;
  arrayDivide.length = 0;
};

// delete last number
const deleteNum = document.querySelector(".delete");

deleteNum.onclick = () => {
  if (resultInput.length === 0) {
    resultIn.value = "0";
  } else {
    //delete last array number
    resultInput.length -= 1;
    var resultInV = resultIn.value;
    //delete last input number
    resultIn.value = resultInV.slice(0, -1);
    // delete plus array
    arrayPlus.length -= 1;
    // delete Minus array
    arrayMinus.length -= 1;
    // delete multi array
    arrayMulti.length -= 1;
    // delete divide array
    arrayDivide.length -= 1;
  }
};
