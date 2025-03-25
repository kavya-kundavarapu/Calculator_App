function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

// Square Root Function
function squareRoot() {
  let display = document.getElementById("display");
  display.value = Math.sqrt(parseFloat(display.value));
}

// Power Function (xʸ)
function power() {
  document.getElementById("display").value += "**";
}

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const calculator = document.querySelector(".calculator");
const displayBox = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  calculator.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.innerText = "☀️ Light Mode";
    displayBox.style.backgroundColor = "#000000"; // Black result box
    displayBox.style.color = "#ffffff"; // White text
    buttons.forEach((button) => {
      button.style.backgroundColor = "#444"; // Darker buttons in dark mode
      button.style.color = "#ffffff";
    });
  } else {
    themeToggle.innerText = "🌙 Dark Mode";
    displayBox.style.backgroundColor = "#f0f0f0"; // Light mode background
    displayBox.style.color = "#333333"; // Dark text
    buttons.forEach((button) => {
      button.style.backgroundColor = "#3498db"; // Blue buttons in light mode
      button.style.color = "#ffffff";
    });
  }
});

// ✅ Enable Keyboard Input
document.addEventListener("keydown", function (event) {
  let key = event.key;
  let display = document.getElementById("display");

  // Allow numbers (0-9)
  if (!isNaN(key)) {
    appendValue(key);
  }

  // Allow basic operators
  if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendValue(key);
  }

  // Allow Enter key for calculation
  if (key === "Enter") {
    event.preventDefault(); // Prevent default form submission behavior
    calculate();
  }

  // Allow Backspace key to delete last character
  if (key === "Backspace") {
    backspace();
  }

  // Allow "C" key to clear display
  if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
