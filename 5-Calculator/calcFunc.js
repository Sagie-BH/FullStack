
function calculator() {
    const numbers = Array.from(document.getElementsByClassName('calc-btn-num'));
    const display = document.getElementById('calc-display-val');
    const equalsBtn = document.getElementById('calc-equals');
    const operatorElements = Array.from(document.getElementsByClassName('calc-btn-operator'));
    const resultArray = [];
    let resetCalc = false;
    
    function Init() {
        equalsBtn.addEventListener('click', () => {
            try {
                // const result = eval(display.innerHTML);
                const result = evaluateExpression(display.innerHTML);
                display.innerHTML = result;
                resetCalc = true;
                resultArray.push(result);
            } catch (error) {
                console.error('Error:', error);
                display.innerHTML = 'Error';
            }
        });
        
        numbers.forEach((num, i) => {
            num.addEventListener('click', (event) => {
        
                if(display.innerText === '0' || resetCalc){
                    display.innerText = '';
                    resetCalc = false;
                }
                const value = event.target.innerHTML;
                display.innerText += value;
            });
        
            if (i === numbers.length - 1) {
                num.innerHTML = 0;
            } else {
                num.innerHTML = i + 1; 
            }
        });
        
        operatorElements.forEach(operator => {
            operator.addEventListener('click', event => {
                if(display.innerHTML === '0'){
                    return;
                }
                const operatorId = event.target.innerText;
                const jsOperator = convertToOperators(operatorId);
                if (jsOperator !== null) {
                    display.innerHTML += jsOperator;
                } else {
                    console.log('Unsupported operator:', operatorId);
                }
            });
        });
        
    }
    
    const convertToOperators = (operatorStr) => {
        switch (operatorStr) {
            case '+':
                return '+';
            case '-':
                return '-';
            case 'x':
                return '*';
            case '&#247;':
                return '/';
            default:
                return null; // Return null or any other default value for unsupported operators
        }
    }
    

    function evaluateExpression(characters) {
        const operators = ['*', '/', '+', '-'];
        let currentOperator = '+';
        let result = 0;
    
        for (const char of characters) {
            if (operators.includes(char)) {
                currentOperator = char;
            } else {
                const number = parseFloat(char);
    
                switch (currentOperator) {
                    case '+':
                        result += number;
                        break;
                    case '-':
                        result -= number;
                        break;
                    case '*':
                        result *= number;
                        break;
                    case '/':
                        result /= number;
                        break;
                }
            }
        }
        return result;
    }

    function logDisplayValue() {
        console.log(`Display Value (Regular): ${this.display.innerText}`);
    }
    
    return {
        Init,
        getResultFromIndex: (index) => {
            return  resultArray[index];
        },
        logDisplayValue
    }
}

let calcInstance = null;
document.addEventListener('DOMContentLoaded', () => {
    calcInstance = calculator();
    calcInstance2 = calculator();

    calcInstance.Init();
});

