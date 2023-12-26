let points = 0;
let cpc = 1;
update();
  
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

function update() {
  document.getElementById('score').innerText = points;
  document.getElementById('upgcpc').innerText = "Upgrade CPC: $" + (cpc * 2);
}


