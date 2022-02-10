import { dest, src, watch} from 'gulp'


const copy = () => {
    return src(['src/**/*.html', '!node_module', 'src/**/*.css', '!src/assets/css/tailwind.css'])
        .pipe(dest('dist'))
};

exports.default = function() {
    watch('src/**/*', series(copy));
};