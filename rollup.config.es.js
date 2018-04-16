import babel from 'rollup-plugin-babel';

export default {
    input: "src/transition.js",
    output: {
        file: "dist/transition.es.js",
        format: "es"
    },
    plugins: [
        babel()
    ]
}