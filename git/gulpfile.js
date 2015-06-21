var gulp = require("gulp");

//var jshint = require("gulp-jshint");

var changed = require("gulp-changed");
var imagemin = require("gulp-imagemin");

var minifyHTML = require("gulp-minify-html");

gulp.task("jshint", function() {
    gulp.src("./src/scripts/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("imagemin", function() {
    var imgSrc = "gulpdemo-master/src/images/**/*",
        imgDst = "gulpdemo-master/build/images";

    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

gulp.task("htmlpage", function() {
   var htmlSrc ="gulpdemo-master/src/*.html",
       htmlDst ="gulpdemo-master/build";

    gulp.src(htmlSrc)
        .pipe(changed(htmlDst))
        .pipe(minifyHTML())
        .pipe(gulp.dest(htmlDst));

});
