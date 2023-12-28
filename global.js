// Declare variables globally
let points = 0;
let cpc = 1;
let cps = 0;
let clicks = 0;
let secondsplayed = 0;
let presshopcost = 0;
let prespercboos = 1;

// Checks if game has been played and if there are no errors with localStorage. If true, retrieve values and put into game.
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

  presshopcost = parseFloat(window.localStorage.getItem("presshopcost"));
  if (isNaN(presshopcost)) {
    presshopcost = 0;
  }

  prespercboos = parseFloat(window.localStorage.getItem("prespercboos"));
  if (isNaN(prespercboos)) {
    prespercboos = 0;
  }
} else {
  window.localStorage.setItem("played", "true");
}

function abbrNum(number) {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(number);
}

function update() {
  document.getElementById("score").innerText = abbrNum(points);
  document.getElementById("upgcpc").innerText = "Upgrade CPC: $" + (cpc * 2 - presshopcost);
  document.getElementById("upgcps").innerText = "Upgrade CPS: $" + (cps * 5 + 10 - presshopcost);
  document.getElementById("cpcstat").innerText = "CPC: " + abbrNum(cpc);
  document.getElementById("cpsstat").innerText = "CPS: " + abbrNum(cps);
  document.getElementById("clicksstat").innerText = "Clicks: " + abbrNum(clicks);
  document.getElementById("secondsstat").innerText = "Seconds played: " + abbrNum(secondsplayed);
  document.getElementById("presoutpshop").innerText = (-1 * (points / 10000)) + " cost to shop items";
  document.getElementById("presoutpboos").innerText = "+" + (points / 1000) + "% boost";

  window.localStorage.setItem("points", points);
  window.localStorage.setItem("cpc", cpc);
  window.localStorage.setItem("cps", cps);
  window.localStorage.setItem("clicks", clicks);
  window.localStorage.setItem("secondsplayed", secondsplayed);
}

function autoclick() {
  points = points + cps;
  secondsplayed++;
  update();
}

update();

setInterval(autoclick, 1000);

document.getElementById("button").onclick = () => {
  points = points + cpc;
  clicks++;
  update();
};

document.getElementById("upgcpc").onclick = () => {
  if (points >= cpc * 2 - presshopcost) {
    points = points - cpc * 2 - presshopcost;
    cpc++;
    update();
  }
};

document.getElementById("upgcps").onclick = () => {
  if (points >= cps * 5 + 10 - presshopcost) {
    points = points - (cps * 5 + 10 - presshopcost);
    cps++;
    update();
  }
};

document.getElementById("presbuttshop").onclick = () => {
  presshopcost += points / 10000;
  points = 0;
  cpc = 1;
  cps = 0;
};

document.getElementById("presbuttboos").onclick = () => {
  prespercboos += points / 100000;
  points = 0;
  cpc = 1;
  cps = 0;
};
