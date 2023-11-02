//#region constante
const MarginData = [
  { name: "Attention", color: "crimson", range: [0, 29] },
  { name: "Bonne marge", color: "green", range: [29, 36] },
  { name: "Bonne marge(prévoir promo)", color: "green", range: [36, 40] },
  { name: "Trés bonne marge(attention! Vérifier PA)", color: "midnightblue", range: [40, 300] },
];
const form = document.querySelector("form");
const inputs = document.querySelectorAll('input')
const displayMARGIN = document.querySelector(".info .margin-value");
const result = document.querySelector(".info .result");
//#endregion

//#region event listener
form.addEventListener("submit", handleForm)
//#endregion

//#region fonction
function handleForm(e) {
  e.preventDefault();

  calulateMargin();
}

function calulateMargin() {
  const priceAchat = inputs[0].value;
  const priceVente = inputs[1].value;

  if (!priceAchat || !priceVente || priceAchat <= 0 || priceVente <= 0) {
    handleError()
    return;
  }


  const MarginObtenu = (priceVente - priceAchat) / priceAchat * 100;
  console.log(MarginObtenu);

  showResult(MarginObtenu)
}

function handleError() {
  displayMARGIN.textContent = "Wooops"
  displayMARGIN.style.color = "inherit"
  result.textContent = "remplisser correctement !!"
}

function showResult(MARGIN) {
  const rank = MarginData.find(data => {
    if (MARGIN >= data.range[0] && MARGIN < data.range[1]) return data;
  })


  displayMARGIN.textContent = MARGIN;
  displayMARGIN.style.color = `${rank.color}`
  result.textContent = `Résultat en %: ${rank.name}`
}
//#endregion
