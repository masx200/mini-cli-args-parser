import assert from "assert";
import parse from "../src/index.ts";
import { test } from "vitest";
test("mini-cli-args-parser", () => {
    const args = [
        "aaaaaaa",
        "bbbbbb",
        "--cccccc=555555555",
        "--ddddd=xcvsaz",
        "xxxxxxxxxxxxx",
        "--ttt=bbb=1",
    ];
    // console.log(args);
    const opts = parse(args);
    const arr = Array.from(opts);

    // console.log(opts);
    // console.log(arr);
    assert(opts["cccccc"] === "555555555");

    assert(opts["ddddd"] === "xcvsaz");

    assert(arr.length === 3);

    assert(arr[0] === "aaaaaaa");
    assert(arr[1] === "bbbbbb");
    assert(arr[2] === "xxxxxxxxxxxxx");
    assert(opts["ttt"] === "bbb=1");
    assert.deepEqual(arr, ["aaaaaaa", "bbbbbb", "xxxxxxxxxxxxx"]);
    assert.deepEqual(
        new Map(Object.entries(opts)),
        new Map(
            Object.entries({
                cccccc: "555555555",
                ddddd: "xcvsaz",
                ttt: "bbb=1",
            })
        )
    );
});
