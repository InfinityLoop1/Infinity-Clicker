let points = 0;
  
  document.getElementById('button').onclick = () => {
    counter = points + 1;
    document.getElementById('points').innerText = points;
};
