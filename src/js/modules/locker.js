export default function locker() {
    const $trigger = $('.js-toggle-slide');
    
    $trigger.on('click', (e) => {
        e.preventDefault();

        let target = $(e.currentTarget).find('.js-toggle-target');
        $(target).slideToggle();
        $(e.currentTarget).toggleClass('is-active');
    });
}