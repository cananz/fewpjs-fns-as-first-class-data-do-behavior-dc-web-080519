/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(t) {
  const hour = t.split(":")[0]
  if (hour <= 11) {
    return "Good Morning";
  } else if (hour <= 17 ) {
    return "Good Afternoon"
  } else{
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(s) {


document.querySelector("#greeting").innerText = s
}
