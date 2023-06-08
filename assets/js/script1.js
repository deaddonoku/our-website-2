// Get the disclaimer link element
const disclaimerLink = document.getElementById('disclaimer-link');

// Function to display the popup message
function showPopup() {
  // Create the popup element
  const popup = document.createElement('div');
  popup.className = 'popup';
  
  // Create the popup message
  const message = document.createElement('p');
  message.textContent = 'Page not found';
  
  // Append the message to the popup
  popup.appendChild(message);
  
  // Append the popup to the body
  document.body.appendChild(popup);
  
  // Blur the background
  document.body.style.filter = 'blur(5px)';
  
  // Remove the popup and reset the background when clicked anywhere
  popup.addEventListener('click', function() {
    document.body.removeChild(popup);
    document.body.style.filter = 'none';
  });
}

// Attach an event listener to the disclaimer link
disclaimerLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  showPopup(); // Show the popup
});
