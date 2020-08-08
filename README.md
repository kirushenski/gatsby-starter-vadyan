<p align="center">
  <a href="https://github.com/p1t1ch/gatsby-starter-vadyan">
    <img
      src="src/images/favicon.png"
      height="104"
      alt="Gatsby Starter Vadyan"
    />
  </a>
</p>

<h1 align="center">Gatsby Starter Vadyan</h1>
<p align="center"><strong align="center">A modern content-agnostic Gatsby starter</strong></p>

<p align="center">
  <a href="https://app.netlify.com/sites/gatsby-starter-vadyan/deploys">
    <img
      src="https://api.netlify.com/api/v1/badges/9a89a14d-291c-4fe2-ac62-241a1d917941/deploy-status"
      alt="Netlify Status"
    />
  </a>
</p>

<p align="center">
  <strong><a href="https://gatsby-starter-vadyan.netlify.app">Demo</a></strong>
  <br/>
  <strong><a href="https://master--5f29a0d2a0b7c8002274e664.chromatic.com">Storybook</a></strong>
</p>

## 🤔 Why?

Setting up a new project in a modern web can be a tedious process. You often need to setup stuff like Typescript / ESLint / Jest / Storybook, and making all these tools working together can be especially tricky. You can install a framework like CRA, but it just gives you instructions how to manage it yourself. So you need to configurate your basic setup from project to project. This process kills the inspiration. This is not fun!

This project is a [Gatsby starter](https://www.gatsbyjs.org/starters/?v=2). Gatsby core gives you built-in performance, SEO support (via static rendering) and access to its awesome [plugins library](https://www.gatsbyjs.org/plugins/). Starter's purpose is to give you opinionated setup of preconfigured tools without making opinions about your next content: in can be a blog, portfolio, landing, some cool demo or whatever you want.

Chosen toolset is reliable and gives you great developer experience. But it shouldn't be difficult to replace some tool with another. I've tried my best to give you this kind of instructions in [Detailed walkthrough](#detailed-walkthrough) section of docs.

## 🔥 Hot features

### ☝️ Most important

- [x] ⚡️ Build with [Gatsby](https://www.gatsbyjs.org/). Get static rendering, code splitting, HMR and other complicated stuff for free

### 💯 Maintain code quality

- [x] 💬 Static type checking with [Typescript](https://www.typescriptlang.org/)
- [x] 🥇 Early errors catch with [ESLint](https://eslint.org/)
- [x] 💅 Auto formatting with [Prettier](https://prettier.io/)
- [x] 🐶 Linting and type checking on commits with [Husky](https://github.com/typicode/husky) & [lint-staged](https://github.com/okonet/lint-staged)
- [x] 🎲 Write unit and integration tests with [Jest](https://jestjs.io/) & [RTL](https://testing-library.com/)
- [x] 🌳 Write E2E tests with [Cypress](https://www.cypress.io/)

### 🎨 Make UI with breeze

- [x] 👩‍🎤 CSS in JS styling with [Emotion](https://emotion.sh/docs/introduction) & [Polished](https://polished.js.org/)
- [x] 📕 Work with components in [Storybook](https://storybook.js.org/) with controls, docs and MDX support
- [x] 🖼 Images optimization with lazy loading and traced SVG placeholders via [Gatsby Image](https://using-gatsby-image.gatsbyjs.org/)
- [x] 🌀 Transform SVGs into React components with [SVGR](https://react-svgr.com/)
- [x] 💄 Theming support with build-in utils
- [x] ✏️ Local variable font setup

### ✨ It's working offline!

- [x] 📦 Full PWA on [Workbox](https://developers.google.com/web/tools/workbox/) under the hood
- [x] 📖 Manifest support
- [x] 🎩 Automatic favicons generation

### 🧠 Modern approach to data management

- [x] 🕶 Get static data with Gatsby GraphQL queries
- [x] 🧨 Get dynamic data with GraphQL via [Apollo Client](https://www.apollographql.com/docs/react/)
- [x] 🏆 Use React hooks for simple state management and Apollo Client for more complicated use cases

### 🚦 Simple but powerful CI/CD

- [x] 🎯 Deploy your app to [Netlify](https://www.netlify.com/)
- [x] 📚 Deploy your Storybook to [Chromatic](https://www.chromatic.com/)
- [x] 👀 Watch your performance, accessibility and SEO changes with [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [x] ✅ Automate deploys, validation and optimization checks with [Github Actions](https://github.com/features/actions)

### 😱 And even more...

- [x] 🤖 Improve your SEO with [React Helmet](https://github.com/nfl/react-helmet) and build-in SEO component
- [x] 📊 Analyze your build with [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- [x] 🛠 Setup supported browsers with [Browserslist](https://github.com/browserslist/browserslist)
- [x] 💥 Write pretty imports with [Webpack aliases](https://webpack.js.org/configuration/resolve/#resolvealias)

## 🚀 Quick start

> Project requires [node](https://nodejs.org/en/) >= 10.14.2 and [yarn](https://classic.yarnpkg.com/lang/en/) v1 to be globally installed on your machine

1. **Create a Gatsby site**

   You can use [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/):

   ```shell
   gatsby new project-name p1t1ch/gatsby-starter-vadyan
   ```

   🚨 Use Yarn as package manager for Gatsby CLI because npm caused problems with this setup (with Storybook in particular)

   Or use Github template feature - click on the big green button atop of the page 🔝

   _If you don't use Gatsby CLI, then you also need to install dependencies for the first time:_

   ```bash
   yarn
   ```

1. **Start developing**

   Move to the just created directory and start development server on http://localhost:8000:

   ```shell
   cd project-name && yarn dev
   ```

## 📜 Scripts list

This project uses `npm scripts` to communicate with the app. Here's the full list:

| `yarn <command>`     | Description                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------- |
| `dev`                | Build app in dev mode and start development server on 8000                                        |
| `build`              | Build app in prod mode in `public` folder                                                         |
| `start`              | Browse production build from `public` folder locally on 8000                                      |
| `storybook`          | Start a Storybook in dev mode on 8080                                                             |
| `storybook:build` \* | Build static Storybook version in `docs` folder                                                   |
| `storybook:start` \* | Browse production build from `docs` folder locally on 8080                                        |
| `test`               | Run Jest. In watch mode locally or in coverage mode on CI                                         |
| `test:coverage`      | Run Jest in coverage mode. Use locally when you want to generate coverage reports                 |
| `test:watch` \*      | Run Jest in watch mode                                                                            |
| `cy:open` \*         | Run Cypress in browser mode                                                                       |
| `cy:run` \*          | Run Cypress in headless mode                                                                      |
| `test:e2e`           | Run Cypress. In browser mode locally or in headless mode on CI. Starts server for you             |
| `pretest:e2e:run` \* | Auto script to build app before headless Cypress run                                              |
| `test:e2e:run`       | Run Cypress in headless mode with server start. Run locally when you need just to check E2E tests |
| `test:e2e:open` \*   | Run Cypress in browser mode with server start                                                     |
| `coverage`           | Оpen coverage reports. You need to generate them with `test:coverage` first                       |
| `stats`              | Open Webpack Bundle Analyzer reports. You need to generate them with `build` first                |
| `lint`               | Run ESLint and Prettier on `.tsx`, `.ts`, `.mdx` and `.js` files                                  |
| `type-check`         | Run Typescript compiler for types checking                                                        |
| `validate`           | Full code quality control: `lint`, `type-check`, `test:coverage` and `test:e2e` in one command    |
| `clean`              | Clean **public** and **.cache** folders for the moments when you cannot rely on cache             |

\* — helper scripts. You don't need to run them yourself most of the time

## Detailed walkthrough

WIP
