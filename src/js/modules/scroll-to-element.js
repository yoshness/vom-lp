import anime from 'animejs';

export default function scrollToElement() {
    const $trigger = $('.js-scroll');

    $trigger.on('click', (e) => {
        // only smooth scroll if in home page, otherwise act as a normal anchor
        e.preventDefault();
        
        let $target = $($(e.currentTarget).attr('href').replace('/', '')),
            offset = 0;

        if($(e.currentTarget).data('offset') != undefined) {
            offset = $(e.currentTarget).data('offset');
        }

        if($target != '') {
        	const scrollCoords = {
                y: window.pageYOffset
            }

            anime({
                targets: scrollCoords,
                y: $target.offset().top + offset,
                duration: 1500,
                easing: 'easeOutQuint',
                update: () => window.scroll(0, scrollCoords.y)
            });
        }
    });
}