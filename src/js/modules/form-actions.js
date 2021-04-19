import validate from 'jquery-validation';

export default function formActions() {
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

	let getUrlParameter = function getUrlParameter(sParam) {
	    let sPageURL = window.location.search.substring(1),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;

	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0] === sParam) {
	            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
	        }
	    }
	    return false;
	};

	$('#js-register-confirm').on('click', (e) => {
		let data = getFormData($('#js-register-form'));
		localStorage.setItem('registerData', JSON.stringify(data));

		let referral = getUrlParameter('referral') ? getUrlParameter('referral') : 'None';
		localStorage.setItem('referral', referral);
	});

	if($('#js-register-confirm-page').length > 0) {
		let retrievedObject = JSON.parse(localStorage.getItem('registerData'));
		$('#js-register-name').val(retrievedObject.stage_name);
		$('#js-register-email').val(retrievedObject.email);
		
		if(retrievedObject.category_other) {
			$('#js-register-category').val(`${retrievedObject.category}, ${retrievedObject.category_other}`);
		}
		else {
			$('#js-register-category').val(retrievedObject.category);
		}

		$('#js-register-sns').val(
			`Twitter: ${retrievedObject.sns_twitter}
			Instagram: ${retrievedObject.sns_instagram}
			Youtube: ${retrievedObject.sns_youtube}
			その他: ${retrievedObject.sns_other}`
		);

		$('#js-register-office').val(retrievedObject.office);

		if(retrievedObject.office_name) {
			$('#js-register-office').val(`${retrievedObject.office}: ${retrievedObject.office_name}`);
		}
		else {
			$('#js-register-office').val(retrievedObject.office);
		}

		$('#js-register-message').val(retrievedObject.message);
		$('#js-register-referral').val(localStorage.getItem('referral'));
	}

	$('#js-contact-confirm').on('click', (e) => {
		let data = getFormData($('#js-contact-form'));
		localStorage.setItem('contactData', JSON.stringify(data));
	});

	if($('#js-contact-confirm-page').length > 0) {
		let retrievedObject = JSON.parse(localStorage.getItem('contactData'));
		$('#js-contact-company').val(retrievedObject.company);
		$('#js-contact-person').val(retrievedObject.person);
		$('#js-contact-email').val(retrievedObject.email);
		$('#js-contact-phone').val(retrievedObject.phone);

		if(retrievedObject.category_other) {
			$('#js-contact-category').val(`${retrievedObject.category}, ${retrievedObject.category_other}`);
		}
		else {
			$('#js-contact-category').val(retrievedObject.category);
		}

		$('#js-contact-message').val(retrievedObject.message);
	}

	$('input[name="category"]').on('change', (e) => {
		if($('#category_other').is(':checked')) {
			$('#js-category-input').show();
			$('#js-category-input').focus();
		}
		else {
			$('#js-category-input').hide();
		}
	});
	$('input[name="office"]').on('change', (e) => {
		if($('#office_yes').is(':checked')) {
			$('#js-office-input').show();
			$('#js-office-input').focus();
		}
		else {
			$('#js-office-input').hide();
		}
	});
	$('input[name="agree"]').on('change', (e) => {
		$('#js-register-confirm').toggleClass('is-disabled');
	});

	$('#js-register-form').validate({
	    ignore: [],
	    rules: {
	      	stage_name: 'required',
	      	email: {
	        	required: true,
	        	email: true
	      	},
	      	email_confirm: {
	        	equalTo: '[name="email"]'
	      	},
	      	category: 'required',
	      	office: 'required',
	    },
	    messages: {
	      	stage_name: '入力してください。',
	      	email: {
	        	required: '入力してください。',
	        	email: '入力してください。'
	      	},
	      	email_confirm: {
	        	equalTo: 'メールは同一ではありません',
	      	},
	      	category: '選択してください。',
	    	office: '選択してください。'
	    },
	    errorPlacement: function(error, element) {
		    error.insertAfter(element.closest('.contact-form__row--required'));
		},
	    submitHandler: function(form) {
	     	window.location.href = `${window.location.origin}/confirm`;
	    }
	});

	$('#js-contact-form').validate({
	    ignore: [],
	    rules: {
	      	company: 'required',
	      	person: 'required',
	      	email: {
	        	required: true,
	        	email: true
	      	},
	      	email_confirm: {
	        	equalTo: '[name="email"]'
	      	},
	      	phone: 'required',
	      	category: 'required'
	    },
	    messages: {
	      	company: '入力してください。',
	      	person: '入力してください。',
	      	email: {
	        	required: '入力してください。',
	        	email: '入力してください。'
	      	},
	      	email_confirm: {
	        	equalTo: 'メールは同一ではありません',
	      	},
	      	phone: '入力してください。',
	      	category: '選択してください。'
	    },
	    errorPlacement: function(error, element) {
		    error.insertAfter(element.closest('.contact-form__row--required'));
		},
	    submitHandler: function(form) {
	     	window.location.href = `${window.location.origin}/contact-confirm`;
	    }
	});
}