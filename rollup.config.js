import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
const manglecompressplugin = terser({
    toplevel: true,
    //   sourcemap: true,
    compress: true,
    mangle: { properties: false },
    output: {
        ascii_only: !0,
        comments: !1,
        beautify: true,
    },
});
export default [
    {
        external: [],
        input: "./lib/index.js",
        output: [
            {
                file: "./dist/index.cjs",
                format: "commonjs",
                sourcemap: true,
                exports: "auto",
            },
            {
                file: "./dist/index.mjs",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            json(),
            babel({
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            targets: {
                                esmodules: true,
                                node: "16",
                            },
                        },
                    ],
                ],
            }),

            manglecompressplugin,
        ],
    },
];
