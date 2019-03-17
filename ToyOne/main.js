// Variables
const toggleBtn = document.querySelector('.submit');
const main = document.querySelector('.text-output');
const form = document.querySelector('#message');

// TOGGLE FUNCTION
function toggle(str) {
  console.log(str)
  let newStr = '';
  
  if (typeof str === Number) {//Check if input is a string
    console.log('This is not a string!');
  }

  for (var i in str) {//iterate through the string
    if (str[i] === str[i].toUpperCase()) {//check for uppercase letters
      newStr += str[i].toLowerCase();//convert uppercase letters to lowercase and add to new string
    } else {
      newStr += str[i].toUpperCase();//all other non-uppercase letters convert to uppercase
    }
  }
  console.log(newStr);
  main.textContent = newStr;
}
// END OF TOGGLE FUNCTION

// TOGGLE FORM SECTION
toggleBtn.addEventListener('click', run);

function run() {
    toggle(form.value);
    // console.log(form.value);
  }

  // uppercase, LOWER CASE
  // tHe quiCK bROwN fox JUMpEd oVER tHe LAzY dOG.