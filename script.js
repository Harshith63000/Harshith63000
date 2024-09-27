// Get the form elements
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const placeInput = document.querySelector('#place');
const interestInput = document.querySelector('#interest');

// Get the button elements
const intermediateBtn = document.querySelector('#intermediate-btn');
const diplomaBtn = document.querySelector('#diploma-btn');
const btechBtn = document.querySelector('#btech-btn');
const nursingBtn = document.querySelector('#nursing-btn');
const animationBtn = document.querySelector('#animation-btn');
const baBtn = document.querySelector('#ba-btn');

// Add event listeners to the buttons
intermediateBtn.addEventListener('click', () => {
  // Show the intermediate groups
  document.querySelector('#intermediate-groups').style.display = 'block';
});

diplomaBtn.addEventListener('click', () => {
  // Show the diploma groups
  document.querySelector('#diploma-groups').style.display = 'block';
});

btechBtn.addEventListener('click', () => {
  // Show the BTech streams
  document.querySelector('#btech-streams').style.display = 'block';
});

nursingBtn.addEventListener('click', () => {
  // Show the Nursing streams
  document.querySelector('#nursing-streams').style.display = 'block';
});

animationBtn.addEventListener('click', () => {
  // Show the Animation streams
  document.querySelector('#animation-streams').style.display = 'block';
});

baBtn.addEventListener('click', () => {
  // Show the BA streams
  document.querySelector('#ba-streams').style.display = 'block';
});

// Add a submit event listener to the form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Get the user input values
  const name = nameInput.value;
  const age = ageInput.value;
  const place = placeInput.value;
  const interest = interestInput.value;

  // Store the user input values in local storage
  localStorage.setItem('name', name);
  localStorage.setItem('age', age);
  localStorage.setItem('place', place);
  localStorage.setItem('interest', interest);

  // Redirect to the next page
  window.location.href = 'next-page.html';
});