var gulp = require('gulp');
var sass = require('gulp-sass');

function style(){
	return(
		gulp.src("src/scss/main.scss")
		.pipe( sass({outputStyle:"expanded"}) ).on("error", sass.logError)
		.pipe( gulp.dest("assets/css") )
	);
}

exports.style = style;