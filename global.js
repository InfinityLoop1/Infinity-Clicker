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
  document.getElementById('score').innerText = abbrNum(5000,2);
  document.getElementById('upgcpc').innerText = "Upgrade CPC: $" + (cpc * 2);
  document.getElementById('upgcps').innerText = "Upgrade CPS: $" + ((cps * 5) + 10);
}




//abbreviate
const abbrNum = (number, decPlaces) => {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces)

  // Enumerate number abbreviations
  var abbrev = ['k', 'm', 'b', 't']

  // Go through the array backwards, so we do the largest first
  for (var i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    var size = Math.pow(10, (i + 1) * 3)

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.round((number * decPlaces) / size) / decPlaces

      // Handle special case where we round up to the next abbreviation
      if (number == 1000 && i < abbrev.length - 1) {
        number = 1
        i++
      }

      // Add the letter for the abbreviation
      number += abbrev[i]

      // We are done... stop
      break
    }
  }

  return number
}


