let elemVal1 = document.getElementById("val1");
let elemVal2 = document.getElementById("val2");
let elemR1 = document.getElementById("ratio1");
let elemR2 = document.getElementById("ratio2");
const idResult = document.getElementById("idResult");
const idNoCheck = document.getElementById("idNoCheck");
const idCheck = document.getElementById("idCheck");
const idDemoRatio = document.getElementById("idDemoRatio");

const defaultR1 = 8;
const defaultR2 = 6;
const defaultVal1 = 800;
const defaultVal2 = 600;
const numbDefault = 245;

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

function convertToPixels(val) {
  return val + 'px';
}

function setResult() {
  calculateFim();
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
  setResult();

  elemVal1.onkeyup = elemR1.onkeyup = elemR2.onkeyup = function () {
    elemVal2.value = calculateVal2(elemVal1.value).toFixed(0);
    setResult();
  }

  elemVal2.onkeyup = function () {
    elemVal1.value = calculateVal1(elemVal2.value).toFixed(0);
    setResult();
  }
}

function calculateFim() {
  let valorFim;
  const val1 = parseInt(elemVal1.value);
  const val2 = parseInt(elemVal2.value);

  if (val1 === val2) {
    idDemoRatio.style.height = convertToPixels(numbDefault);
    idDemoRatio.style.width = convertToPixels(numbDefault);
  } else if (val1 > val2) {
    valorFim = (val2 * numbDefault) / val1;
    idDemoRatio.style.width = convertToPixels(numbDefault);
    idDemoRatio.style.height = convertToPixels(valorFim.toFixed(0));
  } else if (val2 > val1) {
    valorFim = (val1 * numbDefault) / val2;
    idDemoRatio.style.width = convertToPixels(valorFim.toFixed(0));
    idDemoRatio.style.height = convertToPixels(numbDefault);

  }
}

initEventListener();
