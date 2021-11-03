// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// add eventListener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display and put to history

      let history = document.getElementById('history');
      para = document.createElement('p');
      data = display.value + " = " + eval(display.value);
      para.innerText = data;
      history.appendChild(para);
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}

// JavaScript clock showing current date and time in web page using setInterval

const span = document.getElementById('span');

function time() {
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);

// animation for clock
let clock = document.querySelector('.clock');
clock.addEventListener('click', function() {
	this.classList.toggle('rotate');
})