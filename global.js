// Declare variables globally
let points = 0;
let cpc = 1;
let cps = 0;
let clicks = 0;
let secondsplayed = 0;
let prestigeshopcost = 0;
let prestigepointsboost = 1;

// First checks if the game has been played. If not, keep the original values. If yes, get localStorage values there are no errors with localStorage. If there is an error with localStorage, the value with the error is reset to the default value. If not, the value is set to the localStorage value.
let played = window.localStorage.getItem("played");
if (played === "true") {
  points = parseFloat(window.localStorage.getItem("points"));
  if (isNaN(points)) {
    points = 0;
  }

  cpc = parseFloat(window.localStorage.getItem("cpc"));
  if (isNaN(cpc)) {
    cpc = 1;
  }

  cps = parseFloat(window.localStorage.getItem("cps"));
  if (isNaN(cps)) {
    cps = 0;
  }

  clicks = parseFloat(window.localStorage.getItem("clicks"));
  if (isNaN(clicks)) {
    clicks = 0;
  }

  secondsplayed = parseFloat(window.localStorage.getItem("secondsplayed"));
  if (isNaN(secondsplayed)) {
    secondsplayed = 0;
  }

  prestigeshopcost = parseFloat(window.localStorage.getItem("prestigeshopcost"));
  if (isNaN(prestigeshopcost)) {
    prestigeshopcost = 0;
  }

  prestigepointsboost = parseFloat(window.localStorage.getItem("prestigepointsboost"));
  if (isNaN(prestigepointsboost)) {
    prestigepointsboost = 1;
  }
} else {
  window.localStorage.setItem("played", "true");
}

function abbrNum(number) {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(number);
}

function update() {
  prestigeshopcost = prestigeshopcost.toFixed(3);
  prestigepointsboost = prestigepointsboost.toFixed(3);
  
  document.getElementById("presoutpshop").innerText = (-1 * (points / 10000)) + " cost to shop items";
  document.getElementById("presoutpboos").innerText = "+" + (points / 1000) + "% boost";
  
  document.getElementById("score").innerText = abbrNum(points);
  document.getElementById("upgcpc").innerText = "Upgrade CPC: $" + (cpc * 2 - prestigeshopcost);
  document.getElementById("upgcps").innerText = "Upgrade CPS: $" + (cps * 5 + 10 - prestigeshopcost);
  document.getElementById("cpcstat").innerText = "CPC: " + abbrNum(cpc);
  document.getElementById("cpsstat").innerText = "CPS: " + abbrNum(cps);
  document.getElementById("clicksstat").innerText = "Clicks: " + abbrNum(clicks);
  document.getElementById("secondsstat").innerText = "Seconds played: " + abbrNum(secondsplayed);
  document.getElementById("presshopstat").innerText = "Prestige - Price reduced: " + prestigeshopcost;
  document.getElementById("presboosstat").innerText = "Prestige - Score booster: " + (prestigepointsboost * 100) + "%";

  window.localStorage.setItem("points", points);
  window.localStorage.setItem("cpc", cpc);
  window.localStorage.setItem("cps", cps);
  window.localStorage.setItem("clicks", clicks);
  window.localStorage.setItem("secondsplayed", secondsplayed);
}

function autoclick() {
  points = points + cps * prestigepointsboost;
  secondsplayed++;
  update();
}

update();

setInterval(autoclick, 1000);

document.getElementById("button").onclick = () => {
  points = points + cpc * prestigepointsboost;
  clicks++;
  update();
};

document.getElementById("upgcpc").onclick = () => {
  if (points >= cpc * 2 - prestigeshopcost) {
    points = points - cpc * 2 - prestigeshopcost;
    cpc++;
    update();
  }
};

document.getElementById("upgcps").onclick = () => {
  if (points >= cps * 5 + 10 - prestigeshopcost) {
    points = points - (cps * 5 + 10 - prestigeshopcost);
    cps++;
    update();
  }
};

document.getElementById("prestigebuttonshop").onclick = () => {
  prestigeshopcost += parseFloat(points / 10000)
  points = 0;
  cpc = 1;
  cps = 0;
};

document.getElementById("prestigebuttonboost").onclick = () => {
  prestigepointsboost += parseFloat(points / 100000)
  points = 0;
  cpc = 1;
  cps = 0;
};
