export default function checkIfIOS() {
	function check() {
		return [
		    'iPad Simulator',
		    'iPhone Simulator',
		    'iPod Simulator',
		    'iPad',
		    'iPhone',
		    'iPod'
	  	].includes(navigator.platform)
	  	// iPad on iOS 13 detection
	  	|| (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
	  	|| (navigator.userAgent.includes('Mac') && navigator.userAgent.includes('Safari'))
	}

	// hack for blur.scss on iOS
	if(check() === true) {
		$('body').addClass('is-iOS');
	}
}