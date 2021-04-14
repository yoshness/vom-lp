import confetti from 'canvas-confetti';
import anime from 'animejs';

export default function heroAnimation() {
	let title = document.getElementById('js-hero-title');
	title.innerHTML = '';
	let n = 0;
	let str = 'Special surprise that Only you can do';
	let typeTimer = setInterval(function() {
	  n = n + 1;
	  title.innerHTML = str.slice(0, n);
	  if (n === str.length) {
	    clearInterval(typeTimer);
	    return false;
	    title.innerHTML = str;
	    n = 0;
	  }
	}, 60);

	setTimeout(() => {
		let node = document.createElement('i');
		node.setAttribute('id', 'js-hero-confetti');
		title.appendChild(node);

		let confettiIcon = document.getElementById('js-hero-confetti');
		let rect = confettiIcon.getBoundingClientRect();
		confettiIcon.classList.add('is-moving');
		
		let confettiCount = $(window).width() > 768 ? 600 : 200;

		confetti({
		  particleCount: confettiCount,
		  startVelocity: 90,
		  spread: 360,
		  origin: {
		    x: rect.x / 1000 * .6,
		    y: rect.y / 1000 * .8
		  }
		});
	}, 2500);

	anime({
        targets: '#js-hero-overlay',
        height: [ '100%', 0 ],
        easing: 'easeOutQuad',
        duration: 600
    });

	anime({
        targets: '#js-hero-description',
        opacity: [ 0, 1 ],
        translateY: [ -70, 0 ],
        easing: 'easeOutQuad',
        duration: 400,
        delay: 3000
    });

    anime({
        targets: '#js-logo',
        opacity: [ 0, 1 ],
        translateX: [ -70, 0 ],
        easing: 'easeOutQuad',
        duration: 400,
        delay: 3200
    });
}