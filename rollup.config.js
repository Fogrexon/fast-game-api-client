import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';

const extensions = ['.ts', '.js'];

export default [

  {
    input: 'src/index.ts',

    preserveModules: true,

    output: {
      dir: 'build/commonjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },

    plugins: [
      nodeResolve({browser: true}),
      nodePolyfills(),
      postcss({
        extract: true,
      }),
      babel({
        extensions,
      }),
      typescript({
        declaration: true,
        rootDir: 'src',
        declarationDir: 'build/commonjs/src',
      }),
    ],
  },

  {
    input: 'src/index.ts',
    preserveModules: true,
    output: {
      dir: 'build/es',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },

    plugins: [
      nodeResolve({browser: true}),
      nodePolyfills(),
      postcss({
        extract: true,
      }),
      babel({
        extensions,
      }),
      typescript({
        declaration: true,
        rootDir: 'src',
        declarationDir: 'build/es/src',
      }),
    ],
  },

  {
    input: 'src/index.ts',
    output: {
      file: 'build/umd/fast-game-api-client.js',
      // dir: 'build/umd',
      format: 'umd',
      name: 'FastGameApi',
      sourcemap: true,
    },
    plugins: [
      nodeResolve({browser: true}),
      nodePolyfills(),
      postcss({
        extract: true,
      }),
      babel({
        extensions,
      }),
      typescript({
        declaration: true,
        rootDir: 'src',
        declarationDir: 'build/umd',
      }),
    ],
  },
];
