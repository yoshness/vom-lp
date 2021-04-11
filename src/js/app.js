import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import scrollActivate from './modules/scroll-activate';
import initParallax from './modules/init-parallax';

scrollActivate();
initParallax();
