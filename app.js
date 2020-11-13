let theInput = (document.getElementById("input").oninput = function () {
  let theResult = Math.floor((this.value / 14) * 10);
  console.log(typeof theResult);
  let result = document.getElementById("result");
  if (isNaN(this.value)) {
    result.textContent = ` يسطا اكتب رقم بلاش غباء`;
  } else {
    result.textContent = `هيوصلك ${theResult}  جنيه `;
  }
  if (this.value >= 50000000) {
    result.textContent = ` بطل لعب يا حبيبي`;
  }
  if (this.value < 0) {
    result.textContent = ` ازي بقي انا عاوز حضرتك تفهني ازي`;
  }elseif(this.value > 1000 < 10000){
    result.textContent = `يسطا من وين أنت جايب كل دا`;
  }elseif(this.value > 10000){
    result.textContent = `ياباشا أرمي شوي جنيهات علينا`;
  }
});
