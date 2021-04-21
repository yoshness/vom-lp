import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import scrollActivate from './modules/scroll-activate';
import initParallax from './modules/init-parallax';
import locker from './modules/locker';
import formActions from './modules/form-actions';
import formValidation from './modules/form-validation';
import heroAnimation from './modules/hero-animation';
import scrollToElement from './modules/scroll-to-element';
import congratulations from './modules/congratulations';
import separateLetters from './modules/separate-letters';
import checkIfIOS from './modules/check-if-ios';

scrollActivate();
initParallax();
locker();
formActions();
formValidation();
scrollToElement();
separateLetters();
checkIfIOS();

if($('#js-top').length > 0) {
	heroAnimation();
}

if($('#js-register-complete-page').length > 0) {
	congratulations();
	localStorage.setItem('registerData', '');
	localStorage.setItem('referral', '');

	$('html').addClass('scroll-disabled-pc');
}

if($('#js-register-form').length > 0) {
	if(localStorage.getItem('registerData')) {
		let retrievedObject = JSON.parse(localStorage.getItem('registerData'));

		$('input[name="stage_name"]').val(retrievedObject.stage_name);
		$('input[name="email"]').val(retrievedObject.email);
		$('input[name="sns_twitter"]').val(retrievedObject.sns_twitter);
		$('input[name="sns_instagram"]').val(retrievedObject.sns_instagram);
		$('input[name="sns_youtube"]').val(retrievedObject.sns_youtube);
		$('input[name="sns_other"]').val(retrievedObject.sns_other);
		$('input[name="followers"]').val(retrievedObject.followers);
		$('input[name="office"][value='+retrievedObject.office+']').attr('checked', 'checked');
		$('textarea[name="message"]').text(retrievedObject.message);

		$.each(retrievedObject.category, (index, value) => {
			$('input[name="category"][value='+value+']').attr('checked', 'checked');
		});
	}
}

if($('#js-contact-complete-page').length > 0) {
	localStorage.setItem('contactData', '');
	localStorage.setItem('referral', '');

	$('html').addClass('scroll-disabled-pc');
}

if($('#js-contact-form').length > 0) {
	if(localStorage.getItem('contactData')) {
		let retrievedObject = JSON.parse(localStorage.getItem('contactData'));

		$('input[name="company"]').val(retrievedObject.company);
		$('input[name="person"]').val(retrievedObject.person);
		$('input[name="email"]').val(retrievedObject.email);
		$('input[name="phone"]').val(retrievedObject.phone);
		$('textarea[name="message"]').text(retrievedObject.message);

		$.each(retrievedObject.category, (index, value) => {
			$('input[name="category"][value='+value+']').attr('checked', 'checked');
		});
	}
}