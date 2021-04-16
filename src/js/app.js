import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import scrollActivate from './modules/scroll-activate';
import initParallax from './modules/init-parallax';
import locker from './modules/locker';
import formActions from './modules/form-actions';
import heroAnimation from './modules/hero-animation';
import scrollToElement from './modules/scroll-to-element';
import congratulations from './modules/congratulations';
import separateLetters from './modules/separate-letters';

scrollActivate();
initParallax();
locker();
formActions();
scrollToElement();
separateLetters();

if($('#js-top').length > 0) {
	heroAnimation();
}

if($('#js-register-complete-page').length > 0) {
	congratulations();
}
