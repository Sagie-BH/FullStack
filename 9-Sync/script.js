// Function to simulate an asynchronous operation with a delay
function simulateAsyncOperation(callback) {
    setTimeout(() => {
      callback('Async operation completed');
    }, 2000);
  }
  
  // Function to simulate a synchronous operation with a loop
  function simulateSyncOperation() {
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
      sum += i;
    }
    return sum;
  }
  
  // Function to display messages in the UI
  function displayMessage(message) {
    const outputDiv = document.getElementById('output');
    const pTag = document.createElement('p');
    pTag.textContent = message;
    outputDiv.appendChild(pTag);
  }
  
  // Example 1: Asynchronous operation
  displayMessage('Example 1: Asynchronous Operation');
  displayMessage('Before calling async operation');
  
  simulateAsyncOperation((result) => {
    displayMessage(result);
    displayMessage('After async operation');
  });
  
  // Example 2: Synchronous operation
  displayMessage('Example 2: Synchronous Operation');
  displayMessage('Before calling sync operation');
  
  const syncResult = simulateSyncOperation();
  displayMessage(`Sync operation result: ${syncResult}`);
  displayMessage('After sync operation');
  
  // Example 3: Combining async and sync operations
  displayMessage('Example 3: Combining Async and Sync Operations');
  displayMessage('Before calling async operation');
  
  simulateAsyncOperation((result) => {
    displayMessage(result);
    displayMessage('Inside async callback, before sync operation');
  
    const combinedSyncResult = simulateSyncOperation();
    displayMessage(`Sync operation result: ${combinedSyncResult}`);
  
    displayMessage('Inside async callback, after sync operation');
  });
  
  displayMessage('After async operation callback');
  
  