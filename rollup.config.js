import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default [{
    input: "src/transition.js",
    output: {
        file: "dist/transition.min.js",
        format: "umd",
        name: "plainTransition"
    },
    plugins: [
        babel(),
        uglify()
    ],
}, {
    input: "src/transition.js",
    output: [{
        file: "dist/transition.es.js",
        format: "es"
    }, {
        file: "test/transition.es.js",
        format: "es"
    }],
    plugins: [
        babel()
    ]
}]