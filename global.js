let points = 0;
let cpc = 1;
  
  document.getElementById('button').onclick = () => {
    points = points + cpc;
    document.getElementById('score').innerText = points;
  };
