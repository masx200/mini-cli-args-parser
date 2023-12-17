import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import { terser } from "rollup-plugin-terser";
import ts from "rollup-plugin-ts";

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
export default defineConfig([
    {
        external: [],
        input: "./src/index.ts",
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
            ts({ transpiler: "swc" }),
            resolve(),
            commonjs(),
            json(),
            babel({
                babelHelpers: "bundled",
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
]);
