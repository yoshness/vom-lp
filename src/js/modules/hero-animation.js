import confetti from 'canvas-confetti';
import anime from 'animejs';

export default function heroAnimation() {

	setTimeout(() => {
		let confettiIcon = document.getElementById('js-hero-confetti');
		let rect = confettiIcon.getBoundingClientRect();
		confettiIcon.classList.add('is-moving');
		
		let confettiCount = $(window).width() > 768 ? 600 : 200;
		let confettiVelocity = $(window).width() > 768 ? 90 : 30;

		confetti({
		  particleCount: confettiCount,
		  startVelocity: confettiVelocity,
		  spread: 360,
		  gravity: .3,
		  origin: {
		    x: rect.x / 1000 * .6,
		    y: rect.y / 1000 * .8
		  }
		});
	}, 2000);

	anime({
        targets: '#js-hero-overlay',
        height: [ '100%', 0 ],
        easing: 'easeOutQuad',
        duration: 600
    });

    anime({
        targets: '#js-hero-title',
        opacity: [ 0, 1 ],
        translateY: [ -70, 0 ],
        easing: 'easeOutQuad',
        duration: 400,
        delay: 1000
    });

	anime({
        targets: '#js-hero-description',
        opacity: [ 0, 1 ],
        translateY: [ -70, 0 ],
        easing: 'easeOutQuad',
        duration: 400,
        delay: 1500
    });

    anime({
        targets: '#js-logo',
        opacity: [ 0, 1 ],
        translateX: [ -70, 0 ],
        easing: 'easeOutQuad',
        duration: 400,
        delay: 1500
    });
}