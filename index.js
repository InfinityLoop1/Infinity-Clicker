// First, get localStorage values and checks if there are no errors with localStorage. If there is an error with localStorage, the value with the error is reset to the default value. If not, the value is set to the localStorage value.
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

function abbrNum(number) {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(number);
}

function update() {
  if (document.getElementById('x100radio').checked) {
    buymult = 100;
  } else if (document.getElementById('x10radio').checked) {
    buymult = 10;
  } else {
    buymult = 1;
  }
    
  
  document.getElementById("presoutpshop").innerText = (-1 * (points / 10000)).toFixed(3) + " cost to shop items";
  document.getElementById("presoutpboos").innerText = "+" + (points / 1000).toFixed(3) + "% boost";

  document.getElementById("score").innerText = abbrNum(points);
  document.getElementById("upgcpc").innerText = "Upgrade CPC: $" + (cpc * 2 - prestigeshopcost) * buymult;
  document.getElementById("upgcps").innerText = "Upgrade CPS: $" + (cps * 5 + 10 - prestigeshopcost) * buymult;
  document.getElementById("cpcstat").innerText = "CPC: " + abbrNum(cpc);
  document.getElementById("cpsstat").innerText = "CPS: " + abbrNum(cps);
  document.getElementById("clicksstat").innerText = "Clicks: " + abbrNum(clicks);
  document.getElementById("secondsstat").innerText = "Seconds played: " + abbrNum(secondsplayed);
  document.getElementById("presshopstat").innerText = "Prestige - Price reduced: " + prestigeshopcost.toFixed(3);
  document.getElementById("presboosstat").innerText = "Prestige - Score booster: " + (prestigepointsboost * 100).toFixed(3) + "%";

  window.localStorage.setItem("points", points);
  window.localStorage.setItem("cpc", cpc);
  window.localStorage.setItem("cps", cps);
  window.localStorage.setItem("clicks", clicks);
  window.localStorage.setItem("secondsplayed", secondsplayed);
  window.localStorage.setItem("prestigeshopcost", prestigeshopcost);
  window.localStorage.setItem("prestigepointsboost", prestigepointsboost);
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
  if (points >= (cpc * 2 - prestigeshopcost) * buymult) {
    points = points - cpc * 2 - prestigeshopcost;
    cpc++;
    update();
  }
};

document.getElementById("upgcps").onclick = () => {
  if (points >= (cps * 5 + 10 - prestigeshopcost) * buymult) {
    points = points - (cps * 5 + 10 - prestigeshopcost);
    cps++;
    update();
  }
};

document.getElementById("prestigebuttonshop").onclick = () => {
  prestigeshopcost = prestigeshopcost + parseFloat((points / 10000).toFixed(3));
  points = 0;
  cpc = 1;
  cps = 0;
};

document.getElementById("prestigebuttonboost").onclick = () => {
  prestigepointsboost = prestigepointsboost + parseFloat((points / 100000).toFixed(3));
  points = 0;
  cpc = 1;
  cps = 0;
};

//Modals
const modalOverlay = document.querySelector(".modal-overlay");

const closeModals = function () {
  prestigeModal.style.zIndex = "-100";
  statsModal.style.zIndex = "-100";
  modalOverlay.hidden = true;
};

modalOverlay.addEventListener("click", closeModals);

//Prestige Modal
const prestigeModal = document.querySelector(".prestige-modal");
const prestigeOpenModalBtn = document.querySelector(".prestige-btn-open");

const openPrestigeModal = function () {
  prestigeModal.style.zIndex = "100";
  modalOverlay.hidden = false;
};

prestigeOpenModalBtn.addEventListener("click", openPrestigeModal);

//Stats Modal
const statsModal = document.querySelector(".stats-modal");
const statsOpenModalBtn = document.querySelector(".stats-btn-open");

const openStatsModal = function () {
  statsModal.style.zIndex = "100";
  modalOverlay.hidden = false;
};

statsOpenModalBtn.addEventListener("click", openStatsModal);

document.getElementById("x1radio").onclick = () => {
  update();
};
document.getElementById("x10radio").onclick = () => {
  update();
};
document.getElementById("x100radio").onclick = () => {
  update();
};
