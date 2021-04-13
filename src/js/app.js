import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import scrollActivate from './modules/scroll-activate';
import initParallax from './modules/init-parallax';
import locker from './modules/locker';

scrollActivate();
initParallax();
locker();

function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
    	if(n['name'] == 'category') {
    		if(!indexed_array[n['name']]) {
    			indexed_array[n['name']] = [n['value']];
    		}
    		else {
    			indexed_array[n['name']].push(n['value']);
    		}
    	}
    	else {
    		indexed_array[n['name']] = n['value'];
    	}
    });

    return indexed_array;
}

$('#js-register-confirm').on('click', (e) => {
	let data = getFormData($('#js-register-form'));
	console.log(data);

	console.log('start');

	localStorage.setItem('registerData', JSON.stringify(data));
});

if($('#js-register-confirm-page').length > 0) {
	let retrievedObject = JSON.parse(localStorage.getItem('registerData'));
	console.log(retrievedObject);
	$('#js-register-name').val(retrievedObject.stage_name);
	$('#js-register-email').val(retrievedObject.email);
	$('#js-register-category').val(retrievedObject.category);
	$('#js-register-sns').val(
		`Twitter: ${retrievedObject.sns_twitter}
		Instagram: ${retrievedObject.sns_instagram}
		Youtube: ${retrievedObject.sns_youtube}
		その他: ${retrievedObject.sns_other}`
	);
	$('#js-register-office').val(retrievedObject.office);
	$('#js-register-message').val(retrievedObject.message);
}

$('#js-contact-confirm').on('click', (e) => {
	let data = getFormData($('#js-contact-form'));
	console.log(data);

	console.log('start');

	localStorage.setItem('contactData', JSON.stringify(data));
});

if($('#js-contact-confirm-page').length > 0) {
	let retrievedObject = JSON.parse(localStorage.getItem('contactData'));
	console.log(retrievedObject);
	$('#js-contact-company').val(retrievedObject.company);
	$('#js-contact-person').val(retrievedObject.person);
	$('#js-contact-email').val(retrievedObject.email);
	$('#js-contact-phone').val(retrievedObject.phone);
	$('#js-contact-category').val(retrievedObject.category);
	$('#js-contact-message').val(retrievedObject.message);
}