function forwardCounting() {
  let num = prompt("Enter number to count up to (e.g., 10):");
  if (!num || isNaN(num)) return alert("Please enter a valid number!");
  let result = "";

  for (let i = 1; i <= num; i++) {
    result += i + " ";
  }

  document.getElementById("output").innerHTML = `<h3>Forward Counting:</h3> ${result}`;
}

function backwardCounting() {
  let num = prompt("Enter number to count down from (e.g., 10):");
  if (!num || isNaN(num)) return alert("Please enter a valid number!");
  let result = "";

  for (let i = num; i >= 1; i--) {
    result += i + " ";
  }

  document.getElementById("output").innerHTML = `<h3>Backward Counting:</h3> ${result}`;
}

function multiplicationTable() {
  let tableNum = prompt("Enter a number for the multiplication table:");
  if (!tableNum || isNaN(tableNum)) return alert("Please enter a valid number!");
  let limit = prompt("Enter the limit (e.g., 10):");
  if (!limit || isNaN(limit)) return alert("Please enter a valid limit!");

  let result = `<h3>Multiplication Table of ${tableNum}</h3>`;
  for (let i = 1; i <= limit; i++) {
    result += `${tableNum} × ${i} = ${tableNum * i}<br>`;
  }

  document.getElementById("output").innerHTML = result;
}

function changeBackground(color) {
  document.body.style.background = color;
}
