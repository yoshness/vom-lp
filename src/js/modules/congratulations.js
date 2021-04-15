import confetti from 'canvas-confetti';

export default function congratulations() {
	let confettiCount = $(window).width() > 768 ? 600 : 200;
	let confettiVelocity = $(window).width() > 768 ? 90 : 30;

	confetti({
	  particleCount: confettiCount,
	  startVelocity: confettiVelocity,
	  spread: 360,
	  gravity: .3
	});
}