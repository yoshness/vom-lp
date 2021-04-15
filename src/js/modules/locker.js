export default function locker() {
    const $trigger = $('.js-toggle-slide');

     $trigger.on('click', (e) => {
        e.preventDefault();

        let target = $(e.currentTarget).find('.js-toggle-target');

        $('.js-toggle-target').not(target).hide();
     	$('.js-toggle-target').not(target).parent().removeClass('is-active');

        $(target).slideToggle();
        $(target).parent().toggleClass('is-active');
    });
}