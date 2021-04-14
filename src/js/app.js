import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import scrollActivate from './modules/scroll-activate';
import initParallax from './modules/init-parallax';
import locker from './modules/locker';
import formActions from './modules/form-actions';
import heroAnimation from './modules/hero-animation';

scrollActivate();
initParallax();
locker();
formActions();

if($('#js-top').length > 0) {
	heroAnimation();
}