import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify-es';

export default {
    input: 'jackport.js',
    output: {
        file: 'dist/jackport.js',
        format: 'cjs'
    },
    plugins: [
        resolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        uglify()
    ]
}