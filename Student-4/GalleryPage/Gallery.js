// Get the button element
const Btn = document.getElementById("Btn");


// Function to generate a random number between 0 and 255
let randomnum = () => {
  return Math.floor(Math.random() * 256);
};


// Function to change the background color to a random color
let changecolor = () => {
  let randomcolor = `rgb(${randomnum()},${randomnum()},${randomnum()})`;
  document.body.style.backgroundColor = randomcolor;
};

// Add an event listener to the button to change the background color when clicked
Btn.addEventListener("click", changecolor);


// Get the container with font size buttons
let Buttons = document.querySelector('.Buttons');

// Get all buttons inside the container
let btn = Buttons.querySelectorAll('.btn');

// Add click event listeners to each button
btn.forEach(button => {
  button.addEventListener('click', function() {
    // Change the font size of elements with class 'font'
    document.querySelectorAll('.font').forEach(element => {
      element.style.fontSize = this.getAttribute('data-size');
    });
     // Remove 'active' class from the currently active button
    let now = document.getElementsByClassName('active');
    now[0].className = now[0].className.replace(" active", "");
    // Add 'active' class to the clicked button
    this.className += " active";
  });
});
