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
  if (points >= cpc * 2) {
    points = points - (cpc * 2);
    cpc = cpc + 1;
    update();
  }
};

document.getElementById('upgcpc').onclick = () => {
  if (points >= (cps * 5) + 10) {
    points = points - (cps * 5) + 10;
    cps = cps + 0.5;
    update();
  }
};

function autoclick() {
  points = points + cps;
  update();
}

function update() {
  document.getElementById('score').innerText = points;
  document.getElementById('upgcpc').innerText = "Upgrade CPC: $" + (cpc * 2);
}


