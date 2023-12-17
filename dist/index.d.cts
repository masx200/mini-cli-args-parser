declare function parse(args: string[]): Record<string, string | boolean> & {
    [Symbol.iterator]: () => IterableIterator<string>;
};
export { parse as default };
