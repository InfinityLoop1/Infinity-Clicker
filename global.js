let points = 0;
let cpc = 1;
  
  document.getElementById('button').onclick = () => {
    points = points + cpc;
    document.getElementById('score').innerText = points;
  };

  document.getElementById('upgcpc').onclick = () => {
    if (points >= cpc * 2) {
      points = points - (cpc * 2);
      cpc = cpc + 1;
      document.getElementById('score').innerText = points;
    }
  };
