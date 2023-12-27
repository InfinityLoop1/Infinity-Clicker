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
  if (points >= upgcostcpc) {
    points = points - upgcostcpc;
    cpc = cpc + 1;
    update();
  }
};

document.getElementById('upgcps').onclick = () => {
  if (points >= upgcostcps) {
    points = points - upgcostcps;
    cps = cps + 0.5;
    update();
  }
};

function autoclick() {
  points = points + cps;
  update();
}

function update() {
  let upgcostcpc = (cpc * 2);
  let upgcostcps = ((cps * 5) + 10)
  document.getElementById('score').innerText = abbrNum(points);
  document.getElementById('upgcpc').innerText = "Upgrade CPC: $" + upgcostcpc;
  document.getElementById('upgcps').innerText = "Upgrade CPS: $" + upgcostcps;
}

//abbreviate
function abbrNum(number) {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(number);
}
