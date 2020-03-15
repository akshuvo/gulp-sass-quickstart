var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

function style(){
	return(
		gulp.src("src/scss/main.scss")
		.pipe(sass()).on("error", sass.logError)	
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe( gulp.dest("assets/css") )
	);
}

exports.style = style;