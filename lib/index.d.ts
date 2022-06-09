declare function parse(args: string[]): Record<string, string> & {
    [Symbol.iterator]: () => IterableIterator<string>;
};
export default parse;
