# mini-cli-args-parser

迷你版命令行参数解析器

# 安装

```shell
yarn add @masx200/mini-cli-args-parser"
```

# 使用

```js
import parse from "@masx200/mini-cli-args-parser"";
const args=process.argv.slice(2)
const opts = parse(args);
const arr = Array.from(opts);

console.log(opts);
console.log(arr);

```

# 类型声明

```ts
function parse(args: string[]): any;
```
