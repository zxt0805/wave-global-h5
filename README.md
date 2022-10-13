<!--
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-10-08 11:55:00
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-13 17:04:42
 * @FilePath: /wave-global-h5/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# Next.JS Starter Boilerplate

A Next.js starter kit template with Next.js 12 + React 17 + Typescript + Tailwind CSS 3 + Heroicons + Headless UI.

Other tools included: Autoprefixer, Sass, PostCSS, ESLint, Prettier.

## Getting Started

```bash
# Install Dependencies
yarn

# Run the development server
yarn dev
```

## Scripts

**Next.JS**

```bash
# Build
yarn build

# Start server with build files
yarn start
```

**Prettier**

```bash
# Use Prettier to do Format Check for files under ./src
yarn fc

# Use Prettier to do Format Fix for files under ./src
yarn ff
```

**commit**

```bash
# https://www.npmjs.com/package/husky
# https://www.npmjs.com/package/commitizen

commit: yarn cz or npm run cz or feat:

<type>[optional scope]: <description>
[optional body]
[optional footer(s)]

# type *
feat: 
fix: 
docs: 
style: 
refactor: 
perf: 
test: 
chore: 
revert: 
build: 
ci

```