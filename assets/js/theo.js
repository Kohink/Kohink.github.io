// function changeImage() {
//     if (document.getElementById("img-theo").src = "../assets/images/theo2.jpg"){
//         document.getElementById("img-theo").src = "../assets/images/theo.jpg";
//     } 
//       var r = Math.floor(Math.random() * 256);
//       var g = Math.floor(Math.random() * 256);
//       var b = Math.floor(Math.random() * 256);
//       var bgColor = "rgb(" + r + "," + g + "," + b + ")";
//       console.log(bgColor);
//       document.body.style.background = bgColor;
// else 
// {
//     document.getElementById("imgClickAndChange").src = "../assets/images/theo.jpg";
// }


// Declare Global Variables

const images = [
  "../assets/images/theo.jpg",
  "../assets/images/theo2.jpg",
  "../assets/images/theo3.jpg",
  "../assets/images/theo4.jpg",
  "../assets/images/theo5.jpg",
  "../assets/images/theo6.jpg",
  "../assets/images/theo7.jpg",
  "../assets/images/theo8.jpg",

];

// Get a reference to the image element
const image = document.getElementById("img-theo");

let x = 100;
let y = 100;
let vx = 5;
let vy = 5;

// Set the gravity and friction constants
const gravity = .2;

// Define the change image function
function changeImage() {
  // Generate a random number between 0 and the number of images
  const randomIndex = Math.floor(Math.random() * images.length);

  // Get the image at the random index
  const randomImage = images[randomIndex];

  // Update the source of the image to the random image
  image.src = randomImage;
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + r + "," + g + "," + b + ")";
  console.log(bgColor);
  document.body.style.background = bgColor;
}

/************************************************
 * 
 * Functions
 * 
 * **********************************************/


// Define the update function, which will be called on each iteration of the animation loop
function update() {
  // Update the velocity based on gravity and friction
  vy += gravity;

  // Update the position based on the velocity
  x += vx;
  y += vy;

  // Check if the image has hit any of the edges of the screen
  // If so, reverse the direction of the velocity
  if (x + image.width > window.innerWidth || x < 0) {
    vx = -vx;
  }
  if (y + image.height > window.innerHeight || y < 0) {
    vy = -vy;
  }

  // Set the new position for the image
  image.style.left = x + "px";
  image.style.top = y + "px";

  // Call the update function again on the next frame
  requestAnimationFrame(update);
}

// Start the animation loop
update();
