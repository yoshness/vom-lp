let mix = require('laravel-mix');

const ASSETS_FOLDER = './public';

mix.js(`src/js/app.js`, ASSETS_FOLDER)
	.sass('src/sass/style.scss', ASSETS_FOLDER)
    .options({
		processCssUrls: false,
    })
    .copyDirectory('src/images', `${ASSETS_FOLDER}/images`);