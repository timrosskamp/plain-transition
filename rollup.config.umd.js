import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
    input: "src/transition.js",
    output: {
        file: "dist/transition.min.js",
        format: "umd",
        name: "plainTransition"
    },
    plugins: [
        babel(),
        uglify()
    ]
}