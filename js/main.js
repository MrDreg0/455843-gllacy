var link = document.querySelector('.feedback_form-button');
var popup = document.querySelector('.block-feedback-form');
var overlay = document.querySelector('.block-overlay');
var closeButton = document.querySelector('.close-feedback_form');
var userName = popup.querySelector('[name=user-name]');
var userEmail = popup.querySelector('[name=user-email]');
var feedbackSubmit = popup.querySelector('[id=submit-feedback]');

link.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.add('show-popup');
	overlay.classList.add('show-overlay');
	userName.focus();
});

closeButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.remove('show-popup');
	overlay.classList.remove('show-overlay');
	userName.value = '';
	userEmail.value = '';
});

overlay.addEventListener('click', function() {
	popup.classList.remove('show-popup');
	overlay.classList.remove('show-overlay');
	userName.value = '';
	userEmail.value = '';
});

window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27 && popup.classList.contains('show-popup')) {
		evt.preventDefault();
		popup.classList.remove('show-popup');
		overlay.classList.remove('show-overlay');
		userName.value = '';
		userEmail.value = '';
	}
});

feedbackSubmit.addEventListener('click', function(evt) {
	if(!userName.value || !userEmail.value) {
		evt.preventDefault();
		if(!userName.value){
			alert('Пожалуйста укажите как к Вам обращаться.');
		}
		else if(!userEmail.value) {
			alert(userName.value + ', кажется Вы не указали email адрес.');
		}
	}
});