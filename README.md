# mini-cli-args-parser

迷你版命令行参数解析器

# 安装

```shell
yarn add @masx200/mini-cli-args-parser"
```

# 使用方法

```js
import parse from "@masx200/mini-cli-args-parser";
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

## 获取命名参数

```js
const opts = parse(args);
```

## 获取其他参数



```js

const arr = Array.from(opts);
```

# 查看例子



https://github.com/masx200/mini-cli-args-parser/blob/master/test/test.js
