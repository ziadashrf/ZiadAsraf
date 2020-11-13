let theInput = (document.getElementById("input").oninput = function () {
  let theResult = Math.floor((this.value / 14) * 10);
  console.log(typeof theResult);
  let ch = String.fromCharCode(this.value);
  if (isNaN(this.value)) {
    document.getElementById("result").textContent = ` يسطا اكتب رقم بلاش غباء`;
  } else {
    document.getElementById(
      "result"
    ).textContent = `هيوصلك ${theResult}  جنيه `;
  }
  if (this.value >= 50000000) {
    document.getElementById("result").textContent = ` بطل لعب يا حبيبي`;
  }
  if (this.value < 0) {
    document.getElementById(
      "result"
    ).textContent = ` ازي بقي انا عاوز حضرتك تفهني ازي`;
  }
});
