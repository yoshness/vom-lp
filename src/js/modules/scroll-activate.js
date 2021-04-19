import anime from 'animejs';

export default function scrollActivate() {
    const BREAKPOINT_MOBILE = 768;

    // fade-in-up on scroll
    $(window).on('load, scroll', () => {
        $('.js-scroll-activate').each((i, e) => {
            let $parent = $(e);
            let offset = $(window).width() > 768 ? 400 : 150;
        	let targets = $parent.find('.js-scroll-activate-item');
            let top_of_object = $parent.offset().top + offset;
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            let show_speed = $parent.hasClass('slow') ? 1500 : 300;

            $(targets).each((i, e) => {
                let target = e;
                let show_delay = $(target).data('delay') ? $(target).data('delay') : 0;

                if( bottom_of_window > top_of_object ){
                    $parent.removeClass('js-scroll-activate');
                    $(target).find('.js-separate-letters').addClass('is-shown');

                    anime({
                        targets: target,
                        opacity: [ 0, 1 ],
                        translateY: [ 70, 0 ],
                        easing: 'easeOutQuad',
                        duration: show_speed,
                        delay: show_delay
                    });
                }
            });
        }); 
    });
}