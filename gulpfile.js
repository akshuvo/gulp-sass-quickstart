var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

function style(){
	return(
		gulp.src("src/scss/main.scss")
		.pipe( sass({outputStyle:"compact"}) ).on("error", sass.logError)	
		.pipe( postcss( [ autoprefixer() ] ) )
		.pipe( gulp.dest("assets/css") )
	);
}

exports.style = style;