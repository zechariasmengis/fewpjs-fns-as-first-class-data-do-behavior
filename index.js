/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  const parsedTime = parseInt(time)
  if (parsedTime < 12) {
    return "Good Morning"
  } else if (parsedTime >= 12 && parsedTime < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
