# mini-cli-args-parser

迷你版命令行参数解析器

Take a set of command line arguments, optionally with a set of options, and return an object representing the flags found in the passed arguments.

By default, any arguments starting with `-` or `--` are considered boolean flags. If the argument name is followed by an equal sign (`=`) it is considered a key-value pair. Any arguments which could not be parsed are available in `Array.from(parsedArgs)`.

Any arguments after '`--`' will not be parsed and will end up in `Array.from(parsedArgs)`.

# 安装

```shell
yarn add "@masx200/mini-cli-args-parser"
```

# 使用方法

```js
import parse from "@masx200/mini-cli-args-parser";
const args = process.argv.slice(2);
const opts = parse(args);
const arr = Array.from(opts);

console.log(opts);
console.log(arr);
```

# 类型声明

```ts
function parse(args: string[]): any;
```

## 获取命名参数

```js
const opts = parse(args);
```

## 获取其他参数

```js
const arr = Array.from(opts);
```

# 查看例子

```js
const args = [
    "aaaaaaa",
    "bbbbbb",
    "--cccccc=555555555",
    "--ddddd=xcvsaz",
    "xxxxxxxxxxxxx",
    "--ttt=bbb=1",
];

const opts = parse(args);
const arr = Array.from(opts);

console.log(opts);
console.log(arr);
```

```

[Object: null prototype] {
  cccccc: '555555555',
  ddddd: 'xcvsaz',
  ttt: 'bbb=1',
  [Symbol(Symbol.iterator)]: [Function: bound values]
}
[ 'aaaaaaa', 'bbbbbb', 'xxxxxxxxxxxxx' ]

```

```ts
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
console.log(res, arr);
```

```
[Object: null prototype] {
  eeeeee: '3333',
  a: true,
  h: true,
  e: true,
  dddd: true,
  [Symbol(Symbol.iterator)]: [Function (anonymous)]
} [ 'haha', '--', '-o', '--p' ]
```
