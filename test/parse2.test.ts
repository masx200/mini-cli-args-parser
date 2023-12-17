import { assert, test } from "vitest";
import parse from "../src/index.ts";
test("mini-cli-args-parser", () => {
    const res = parse([
        "-a",
        "-he",
        "--dddd",
        "--eeeeee=3333",
        "--",
        "haha",
        "--",
        "-o",
        "--p",
    ]);
    const arr = [...res];
    // console.log(res, arr);
    assert.deepEqual(arr, ["haha", "--", "-o", "--p"]);
    assert.deepEqual(
        new Map(Object.entries(res)),
        new Map(
            Object.entries({
                eeeeee: "3333",
                a: true,
                h: true,
                e: true,
                dddd: true,
            })
        )
    );
});
