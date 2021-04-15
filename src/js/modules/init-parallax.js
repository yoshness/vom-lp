import Rellax from 'rellax';

export default function initParallax() {
	window.onload = () => {
		let rellax = new Rellax('.rellax', {
			center:true
		});
	}
}