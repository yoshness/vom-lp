import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import scrollActivate from './modules/scroll-activate';
import initParallax from './modules/init-parallax';
import locker from './modules/locker';
import formActions from './modules/form-actions';
import heroAnimation from './modules/hero-animation';
import scrollToElement from './modules/scroll-to-element';

scrollActivate();
initParallax();
locker();
formActions();
scrollToElement();

if($('#js-top').length > 0) {
	heroAnimation();
}