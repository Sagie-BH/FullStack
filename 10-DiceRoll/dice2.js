const diceOne = document.getElementById('diceOne');
const diceTwo = document.getElementById('diceTwo');
const resultTable = document.getElementById('resultTable');

/*The rollDice function is a callback because it is passed as a parameter
 to the rollDices function and executed inside it to roll a single dice. */
// rollDice = (dice) => dice.innerHTML = Math.floor(Math.random() * 6) + 1;


// Callback function to roll a single dice with a delay
// rollDice = (dice) => {
//     setTimeout(() => {
//         dice.innerHTML = Math.floor(Math.random() * 6) + 1;
//     }, 1500); // Delay of 500 milliseconds (half a second)
// };


// Callback function to roll a single dice with a delay
rollDice = (dice) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            dice.innerHTML = Math.floor(Math.random() * 6) + 1;
            resolve(dice.innerText);
        }, 1500);
    });
};


// rollDices = () => {
//     rollDice(diceOne);
//     rollDice(diceTwo);
// }

rollDices = () => {
    return Promise.all([rollDice(diceOne), rollDice(diceTwo)]);
};

addRow = (message) =>
    resultTable.innerHTML += `<tr>` +
    `<td>${message}</td>` +
    `<td>${diceOne.innerText}</td>` +
    `<td>${diceTwo.innerText}</td>` +
    `</tr>`;


function cubeRollPromise() {
    return new Promise((resolve, reject) => {
        if (diceOne.innerText !== diceTwo.innerText)
            resolve();
        else {
            reject();
        }
    })
}
cubeRoll = async () => {
    await rollDices();
    // Call the cubeRollPromise and handle the result using .then() and .catch()
    cubeRollPromise().then(() => { addRow('Resolved') }).catch(() => { addRow('Rejected') });
}


document.getElementById("btnRoll").addEventListener('click', cubeRoll);

