var gulp = require("gulp");

var jshint = require("gulp-jshint");

var changed = require("gulp-changed");
var imagemin = require("gulp-imagemin");

gulp.task("jshint", function() {
    gulp.src("./src/scripts/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("imagemin", function() {
    var imgSrc = "./src/images/**/*",
        imgDst = "./build/images";

    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});
