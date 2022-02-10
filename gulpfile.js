const { dest, src, series, watch} = require('gulp');


const copy = () => {
    return src(['src/**/*.html', 'src/**/*.svg', '!node_module/**', 'src/**/*.css', '!src/assets/css/tailwind.css'])
        .pipe(dest('dist'))
};

exports.default = function() {
    watch('src/**/*', series(copy));
};