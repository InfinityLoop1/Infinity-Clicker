let points = 0;
let cpc = 1;
let cps = 0;
let clicks = 0;
let secondsplayed = 0;

function abbrNum(number) {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(number);
}

function update() {
  document.getElementById("score").innerText = abbrNum(points);
  document.getElementById("upgcpc").innerText = "Upgrade CPC: $" + cpc * 2;
  document.getElementById("upgcps").innerText = "Upgrade CPS: $" + (cps * 5 + 10);
  document.getElementById("cpcstat").innerText = "CPC: " + cpc;
  document.getElementById("cpcstat").innerText = "CPS: " + cps;
  document.getElementById("clicksstat").innerText = "Clicks: " + clicks;
  document.getElementById("secondsstat").innerText = "Seconds played: " + secondsplayed;
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
  if (points >= cpc * 2) {
    points = points - cpc * 2;
    cpc = cpc + 1;
    update();
  }
};

document.getElementById("upgcps").onclick = () => {
  if (points >= cps * 5 + 10) {
    points = points - (cps * 5 + 10);
    cps = cps + 0.5;
    update();
  }
};
