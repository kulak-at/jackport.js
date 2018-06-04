import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify-es';
import typescript from 'rollup-plugin-typescript';

export default {
    input: 'jackport.ts',
    output: {
        file: 'dist/jackport.js',
        format: 'umd',
        name: 'JackPort'
    },
    plugins: [
        typescript(),
        resolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        // uglify()
    ]
}