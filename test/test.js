import assert from "assert";
import parse from "../lib/index.js";

const args = [
    "aaaaaaa",
    "bbbbbb",
    "--cccccc=555555555",
    "--ddddd=xcvsaz",
    "xxxxxxxxxxxxx",
];

const opts = parse(args);
const arr = Array.from(opts);

console.log(opts);
console.log(arr);
assert(opts["cccccc"] === "555555555");

assert(opts["ddddd"] === "xcvsaz");

assert(arr.length === 3);

assert(arr[0] === "aaaaaaa");
assert(arr[1] === "bbbbbb");
assert(arr[2] === "xxxxxxxxxxxxx");
