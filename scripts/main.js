const elemVal1 = document.getElementById("val1");
const elemVal2 = document.getElementById("val2");
const elemR1 = document.getElementById("ratio1");
const elemR2 = document.getElementById("ratio2");
const idResult = document.getElementById("idResult");
const idNoCheck = document.getElementById("idNoCheck");
const idCheck = document.getElementById("idCheck");

const defaultR1 = 8;
const defaultR2 = 6;
const defaultVal1 = 800;
const defaultVal2 = 600;

elemVal1.value = defaultVal1;
elemVal2.value = defaultVal2;
elemR1.value = defaultR1;
elemR2.value = defaultR2;

idCheck.hidden = true;

function calculateVal2(val) {
  return (val / elemR1.value) * elemR2.value;
}

function calculateVal1(val) {
  return (val / elemR2.value) * elemR1.value;
}

function isInteger(val) {
  return (val % 1 === 0) ? val : val.toFixed(2)
}

function setResult() {
  idResult.innerText = `${elemVal1.value}x${elemVal2.value}`;
}

function animateClipboard() {
  idCheck.classList.add("animate__fadeIn");
  idCheck.hidden = false;
  idNoCheck.hidden = true;
}

function setClipboardDefault() {
  setTimeout(() => {
    idCheck.hidden = true;
    idNoCheck.hidden = false;
  }, 2000);
}

function copy() {
  navigator.clipboard.writeText(idResult.innerText);
  animateClipboard();
  setClipboardDefault();
}


function initEventListener() {
  elemVal1.onkeyup = elemR1.onkeyup = elemR2.onkeyup = function () {
    elemVal2.value = isInteger(calculateVal2(elemVal1.value));
    setResult();
  }

  elemVal2.onkeyup = function () {
    elemVal1.value = isInteger(calculateVal1(elemVal2.value));
    setResult();
  }
}

setResult();
initEventListener();
