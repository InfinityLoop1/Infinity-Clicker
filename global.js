// Declare variables globally
let points = 0;
let cpc = 1;
let cps = 0;
let clicks = 0;
let secondsplayed = 0;

// Check for played status and retrieve values
let played = window.localStorage.getItem("played");
points = window.localStorage.getItem("points");
if( played === "true" && points !== "NaN" )
{
    points = parseInt(window.localStorage.getItem("points"));
    cpc = parseInt(window.localStorage.getItem("cpc"));
    cps = parseFloat(window.localStorage.getItem("cps"));
    clicks = parseInt(window.localStorage.getItem("clicks"));
    secondsplayed = parseInt(window.localStorage.getItem("secondsplayed"));
} else {
    window.localStorage.setItem("played", "true");
    points = 0;
}

function abbrNum(number) {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(number);
}

function update() {
  document.getElementById("score").innerText = abbrNum(points);
  document.getElementById("upgcpc").innerText = "Upgrade CPC: $" + cpc * 2;
  document.getElementById("upgcps").innerText = "Upgrade CPS: $" + (cps * 5 + 10);
  document.getElementById("cpcstat").innerText = "CPC: " + abbrNum(cpc);
  document.getElementById("cpsstat").innerText = "CPS: " + abbrNum(cps);
  document.getElementById("clicksstat").innerText = "Clicks: " + abbrNum(clicks);
  document.getElementById("secondsstat").innerText = "Seconds played: " + abbrNum(secondsplayed);

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
