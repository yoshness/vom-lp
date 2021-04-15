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
		$('#js-register-category').val(retrievedObject.category);
		$('#js-register-sns').val(
			`Twitter: ${retrievedObject.sns_twitter}
			Instagram: ${retrievedObject.sns_instagram}
			Youtube: ${retrievedObject.sns_youtube}
			その他: ${retrievedObject.sns_other}`
		);
		$('#js-register-office').val(retrievedObject.office);
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
		$('#js-contact-category').val(retrievedObject.category);
		$('#js-contact-message').val(retrievedObject.message);
	}
}