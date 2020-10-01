import assert from "assert";
import { parseargs } from "./parseargs.js";
/**
 * @param {string[]} args
 * @returns {Object}
 */
export default function parse(args) {
    assert(Array.isArray(args));
    const result = parseargs(args);
    const others = args.filter((a) => {
        return typeof a === "string" && !a.startsWith("-");
    });
    result[Symbol.iterator] = others[Symbol.iterator].bind(others);
    return result;
}
