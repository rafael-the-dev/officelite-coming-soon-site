const { dest, src, parallel, series, watch } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const gulpClean = require('gulp-clean');
const gulpHtmlMin = require('gulp-htmlmin');
//const gulpImageMin = require('gulp-imagemin');
const gulpUseMin = require('gulp-usemin');
const rev = require('gulp-rev');


const clean = () => {
    return src(['dist'])
        .pipe(gulpClean({ read: false }))

};

const cssClean = () => {
    return src(['dist/**/*.css', '!node_module/**', '!src/**/*.css'])
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist'))
};


const minifyHtml = () => {
    return src('dist/*.html')
        .pipe(gulpHtmlMin({ collapseWhitespace: true }))
        .pipe(dest('dist'));
};

/*const minifyImages = () => {
    return src('dist/assets/images')
        .pipe(gulpImageMin())
        .pipe(dest('dist'))
};*/

const usemin = () => {
    return src(['dist/**/*.html', '!node_module/**', '!src/**'])
        .pipe(gulpUseMin({
            css: [ rev() ],
            html: [ gulpHtmlMin({ collapseWhitespace: true }) ],
            //inlinecss: [ cleanCSS({compatibility: 'ie8'}), 'concat' ]
        }))
        .pipe(dest('build/'));
};

const copy = () => {
    return src(['src/**/*.html', 'src/**/*.svg', '!node_module/**', 'src/**/*.css', '!src/assets/css/input.css'])
        .pipe(dest('dist'))
};

exports.default = function() {
    watch('src/**/*', series(clean, copy, parallel(minifyHtml, cssClean)));
};