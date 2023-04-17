const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = usernameInput.value.trim();
	const password = passwordInput.value.trim();
	if (username === '' || password === '') {
		alert('Please enter a valid username and password.');
		return;
	}
	// Code to authenticate the user's credentials goes here
	// If the user is authenticated, redirect them to the dashboard page
	window.location.href = 'dashboard.html';
});
