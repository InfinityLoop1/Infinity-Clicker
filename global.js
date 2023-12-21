let points = 0;
  
  document.getElementById('button').onclick = () => {
    points = points + 1;
    document.getElementById('pointcounter').innerText = points;
};
