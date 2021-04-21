import validate from 'jquery-validation';

export default function formValidation() {
	$('input[name="category"]').on('change', (e) => {
		if($('#category_other').is(':checked')) {
			$('#js-category-input').show();
			$('#js-category-input').focus();

			$('input[name="category_other"]').rules( 'add', {
			  required: true,
			  messages: {
			    required: "入力してください"
			  }
			});
		}
		else {
			$('#js-category-input').hide();
			$('#js-category-input-error').hide();
			$('input[name="category_other"]').rules('remove');
		}
	});
	$('input[name="sns_1"]').on('change', (e) => {
		if($('#sns_1').is(':checked')) {
			$('input[name="sns_twitter"]').rules( 'add', {
			  required: true,
			  messages: {
			    required: "入力してください"
			  }
			});
		}
		else {
			$('#sns_twitter-error').hide();
			$('input[name="sns_twitter"]').rules('remove');
		}
	});
	$('input[name="sns_2"]').on('change', (e) => {
		if($('#sns_2').is(':checked')) {
			$('input[name="sns_instagram"]').rules( 'add', {
			  required: true,
			  messages: {
			    required: "入力してください"
			  }
			});
		}
		else {
			$('#sns_instagram-error').hide();
			$('input[name="sns_instagram"]').rules('remove');
		}
	});
	$('input[name="sns_3"]').on('change', (e) => {
		if($('#sns_3').is(':checked')) {
			$('input[name="sns_youtube"]').rules( 'add', {
			  required: true,
			  messages: {
			    required: "入力してください"
			  }
			});
		}
		else {
			$('#sns_youtube-error').hide();
			$('input[name="sns_youtube"]').rules('remove');
		}
	});
	$('input[name="sns_4"]').on('change', (e) => {
		if($('#sns_4').is(':checked')) {
			$('input[name="sns_other"]').rules( 'add', {
			  required: true,
			  messages: {
			    required: "入力してください。"
			  }
			});
		}
		else {
			$('#sns_other-error').hide();
			$('input[name="sns_other"]').rules('remove');
		}
	});
	$('input[name="office"]').on('change', (e) => {
		if($('#office_yes').is(':checked')) {
			$('#js-office-input').show();
			$('#js-office-input').focus();

			$('input[name="office_name"]').rules( 'add', {
			  required: true,
			  messages: {
			    required: "入力してください。"
			  },
			});
		}
		else {
			$('#js-office-input').hide();
			$('input[name="office_name"]').rules('remove');
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
	      	sns_1: {
	      		required: {
	      			depends: function(element) {
	      				return !$('input[name="sns_twitter"]').val() && !$('input[name="sns_instagram"]').val() && !$('input[name="sns_youtube"]').val() && !$('input[name="sns_other"]').val();
	      			}
	      		}
	      	},
	      	followers: 'required'
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
	    	office: '選択してください。',
	    	sns_1: '選択してください。',
	    	followers: '入力してください。'
	    },
	    errorPlacement: function(error, element) {
	    	if(element.attr('name') == 'sns_twitter' || 
	    	   element.attr('name') == 'sns_instagram' || 
	    	   element.attr('name') == 'sns_youtube' || 
	    	   element.attr('name') == 'sns_other') {
	    		error.insertAfter(element);
	    	}
	    	else {
	    		error.insertAfter(element.closest('.contact-form__row'));
	    	}
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