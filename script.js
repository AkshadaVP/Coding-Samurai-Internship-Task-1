function appendToResult(value) {
    document.getElementById("result").value += value;
  }
  
  function clearResult() {
    document.getElementById("result").value = '';
  }
  
  function calculateResult() {
    try {
      const expression = document.getElementById("result").value;
      const result = eval(expression);
      document.getElementById("result").value = result;
      addToHistory(expression, result);
    } catch (error) {
      document.getElementById("result").value = 'Error';
    }
  }
  
  function addToHistory(expression, result) {
    const historyList = document.getElementById("historyList");
    const listItem = document.createElement("li");
    listItem.textContent = `${expression} = ${result}`;
    historyList.appendChild(listItem);
  }
  