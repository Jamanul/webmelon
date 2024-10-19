function startCountUp(targetNumber) {
    let currentNumber = 1;
    const counterElement = document.getElementById('counter');

    const interval = setInterval(() => {
      counterElement.innerText = currentNumber;
      currentNumber++;

      if (currentNumber > targetNumber) {
        clearInterval(interval); 
      }
    }, 10); 
  }
function startCountUpOne(targetNumber) {
    let currentNumber = 1;
    const counterElement = document.getElementById('counterTwo');

    const interval = setInterval(() => {
      counterElement.innerText = currentNumber;
      currentNumber++;

      if (currentNumber > targetNumber) {
        clearInterval(interval); 
      }
    }, 100); 
  }
function startCountUpTwo(targetNumber) {
    let currentNumber = 1;
    const counterElement = document.getElementById('counterThree');

    const interval = setInterval(() => {
      counterElement.innerText = currentNumber;
      currentNumber++;

      if (currentNumber > targetNumber) {
        clearInterval(interval); 
      }
    }, 7.5); 
  }
  
  window.onload = function() {
    startCountUp(200); 
    startCountUpOne(20); 
    startCountUpTwo(150);
 
  };

  
