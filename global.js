let counter = 0;
  
  document.getElementById('button').onclick = () => {
    counter = counter + 1;
    document.getElementById('score').innerText = counter;
  };
