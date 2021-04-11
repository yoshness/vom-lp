import anime from 'animejs';

export default function scrollActivate() {
    const BREAKPOINT_MOBILE = 768;

    // fade-in-up on scroll
    $(window).on('load, scroll', () => {
        $('.js-scroll-activate').each((i, e) => {
        	let target = e, offset = 0;

            if($(window).width() > BREAKPOINT_MOBILE){
            	if($(target).data('offset') != undefined) {
            		offset = $(target).data('offset');
            	}
            	else {
            		offset = 500;
            	}
            }
            else {
                offset = 150;
            }

            let top_of_object = $(target).offset().top + offset;
            let bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > top_of_object ){
                if($(target).css('opacity') == 0) {
                    $(target).removeClass('js-scroll-activate');

                    anime({
                        targets: target,
                        opacity: [ 0, 1 ],
                        translateY: [ 70, 0 ],
                        easing: 'easeOutQuad',
                        duration: 250,
                    });
                }
            }
        }); 
    });
}