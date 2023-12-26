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

document.getElementById('upgcps').onclick = () => {
  if (points >= (cps * 5) + 10) {
    points = points - ((cps * 5) + 10);
    cps = cps + 0.5;
    update();
  }
};

function autoclick() {
  points = points + cps;
  update();
}

function update() {
  document.getElementById('score').innerText = abbrNum(points);
  document.getElementById('upgcpc').innerText = "Upgrade CPC: $" + (cpc * 2);
  document.getElementById('upgcps').innerText = "Upgrade CPS: $" + ((cps * 5) + 10);
}




//abbreviate
function abbrNum(number) {
  if (number < 0) {
    return "-" + abbrNum(-1 * number);
  }
  if (number < 1000) {
    return number;
  } else if (number >= 1000 && number < 1_000_000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  } else if (number >= 1_000_000 && number < 1_000_000_000) {
    return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
    return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
    return (number / 1_000_000_000_000).toFixed(1).replace(/\.0$/, "") + "T";
  }
}
