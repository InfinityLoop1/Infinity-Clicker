let points = 0;
  
  document.getElementById('clickbutton').onclick = () => {
    points = points + 1;
    document.getElementById('pointcounter').innerText = points;
};
