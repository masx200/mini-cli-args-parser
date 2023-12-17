import parseArgs from "../lib/index.js";

function parse(args: string[]): Record<string, string | boolean> & {
    [Symbol.iterator]: () => IterableIterator<string>;
} {
    const args1: string[] = [];
    const args2: string[] = [];
    const args3: string[] = [];

    for (const arg of args) {
        if (arg === "--") {
            args3.push(...args.slice(args.indexOf(arg) + 1));
            break;
        } else if (arg.startsWith("-") && !arg.includes("=")) {
            args1.push(arg);
        } else {
            args2.push(arg);
        }
    }
    const res: Record<string, string | boolean> & {
        [Symbol.iterator]: () => IterableIterator<string>;
    } = parseArgs(args2);

    for (const arg of args1) {
        if (arg.startsWith("--") && arg.length > 2 && arg[2] !== "-") {
            res[arg.slice(2)] = true;
        } else if (arg.startsWith("-") && arg.length > 1 && arg[1] !== "-") {
            for (const c of arg.slice(1)) {
                res[c] = true;
            }
        }
    }
    const array = [...res];
    res[Symbol.iterator] = () => {
        return [...array, ...args3][Symbol.iterator]();
    };
    return res;
}
export default parse;
