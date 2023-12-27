let points = 0;
let cpc = 1;
let cps = 0;
update();

setInterval(autoclick, 1000);
  
document.getElementById('button').onclick = () => {
  points = points + cpc;
  update();
};

document.getElementById('upgcpc').onclick = () => {
  if (points >= upgcost_cpc) {
    points = points - upgcost_cpc;
    cpc = cpc + 1;
    update();
  }
};

document.getElementById('upgcps').onclick = () => {
  if (points >= upgcost_cps) {
    points = points - upgcost_cps;
    cps = cps + 0.5;
    update();
  }
};

function autoclick() {
  points = points + cps;
  update();
}

function update() {
  let upgcost_cpc = (cpc * 2);
  let upgcost_cps = ((cps * 5) + 10)
  document.getElementById('score').innerText = abbrNum(points);
  document.getElementById('upgcpc').innerText = "Upgrade CPC: $" + upgcost_cpc;
  document.getElementById('upgcps').innerText = "Upgrade CPS: $" + upgcost_cps;
}

//abbreviate
function abbrNum(number) {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(number);
}
