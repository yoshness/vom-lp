export default function separateLetters() {
	$('.js-separate-letters').each((index, val) => {
		init($(val), $(val).data('blur-delay') ? $(val).data('blur-delay') : 0);
	});

	function init($el, blur_delay) {
		let $div = $el.clone().html('');

		$el.contents().each((i, value) => {
			let $textArray = $(value).text().split('');
			for (let i = 0; i < $textArray.length; i++) {
				let delay = .7 + (i / 10) + blur_delay;
				let ifSpace = $textArray[i] == ' ' ? 'width: 5px;' : '';
				
				$(`<span class="blur-text__letter" style="${ifSpace} transition-delay: ${delay}s">`).text($textArray[i]).appendTo($div);
			}
		});

		$el.replaceWith($div);
	}
}