function calculator() {
    const buttons = {
      decimal: document.getElementById('calc-decimal'),
      clear: document.getElementById('calc-clear'),
      backspace: document.getElementById('calc-backspace')
    };

    const displayValElement = document.getElementById('calc-display-val');
  
    let displayVal = '0';
    let pendingVal;
    let evalStringArray = [];
  
    const calcNumBtns = Array.from(document.getElementsByClassName('calc-btn-num'));
    calcNumBtns.forEach((btn, index) => btn.innerText = index);
  
    const calcOperatorsBtns = document.getElementsByClassName('calc-btn-operator');
    
    const performOperation = (operator) => {
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push(operator);
      };

    const operators = {
      "+": () => performOperation('+'),
      "-": () => performOperation('-'),
      "x": () => performOperation('*'),
      "÷": () => performOperation('/'),
      "=": () => {
        evalStringArray.push(displayVal);
        let evaluation = evaluate(evalStringArray);
        displayVal = evaluation + '';
        displayValElement.innerText = displayVal;
        evalStringArray = [];
      }
    };
  
    const evaluate = (arr) => {
      const operation = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
      };
  
      while (arr.length > 1) {
        let op = arr.splice(1, 1)[0];
        let num1 = parseFloat(arr.splice(0, 1)[0]);
        let num2 = parseFloat(arr[0]);
        let result = operation[op](num1, num2);
        arr[0] = result;
      }
      return arr[0];
    };
    
    const updateDisplayVal = (clickObj) => {
        let btnText = clickObj.target.innerText;
        if (displayVal === '0') displayVal = '';
        displayVal += btnText;
        displayValElement.innerText = displayVal;
      };
    
    const init = () => {
      for (let i = 0; i < calcNumBtns.length; i++) {
        calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
      }
  
      for (let i = 0; i < calcOperatorsBtns.length; i++) {
        calcOperatorsBtns[i].addEventListener('click', operators[calcOperatorsBtns[i].innerText], false);
      }
  
      buttons.clear.onclick = () => {
        displayVal = '0';
        pendingVal = undefined;
        evalStringArray = [];
        displayValElement.innerHTML = displayVal;
      };
  
      buttons.backspace.onclick = () => {
        let lengthOfDisplayVal = displayVal.length;
        displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
        if (displayVal === '') displayVal = '0';
        displayValElement.innerText = displayVal;
      };
  
      buttons.decimal.onclick = () => {
        if (!displayVal.includes('.')) displayVal += '.';
        displayValElement.innerText = displayVal;
      };
    };
  
    return {
      init
    };
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const calc = calculator();
    calc.init();
  });