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

Chosen toolset is reliable and gives you great developer experience. But it shouldn't be difficult to replace some tool with another. If you prefer `styled-components` instead of `Emotion` or you don't need dynamic data fetching with `Apollo Client` for your next project, then just move configuration around a little bit. Removing things always is more enjoyable process than adding 🙂

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

- [x] 🎯 Deploy app to [Netlify](https://www.netlify.com/)
- [x] 📚 Deploy Storybook to [Chromatic](https://www.chromatic.com/)
- [x] 👀 Watch out for performance, accessibility and SEO changes with [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [x] ✅ Automate deploys, validation and optimization checks with [Github Actions](https://github.com/features/actions)

### 😱 And even more...

- [x] 🤖 Improve SEO with [React Helmet](https://github.com/nfl/react-helmet) and build-in SEO component
- [x] 📊 Analyze generated build with [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- [x] 🌐 Setup supported browsers with [Browserslist](https://github.com/browserslist/browserslist)
- [x] 💥 Write pretty imports with [Webpack aliases](https://webpack.js.org/configuration/resolve/#resolvealias)

## 🚀 Quick start

> Project requires [node](https://nodejs.org/en/) >= 10.14.2 and [yarn](https://classic.yarnpkg.com/lang/en/) v1 to be globally installed on your machine

1. **Create a Gatsby site**

   You can use [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/):

   ```shell
   gatsby new project-name p1t1ch/gatsby-starter-vadyan
   ```

   🚨 Use Yarn as package manager for Gatsby CLI because npm caused problems with this setup (with Storybook in particular)

   Or use Github template feature — click on the big green button atop of the page 🔝

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
| `test:e2e`           | Run Cypress. In browser mode locally or in headless mode on CI. Server start includes             |
| `pretest:e2e:run` \* | Auto script to build app before headless Cypress run                                              |
| `test:e2e:run`       | Run Cypress in headless mode with server start. Run locally when you need just to check E2E tests |
| `test:e2e:open` \*   | Run Cypress in browser mode with server start                                                     |
| `coverage`           | Оpen coverage reports. You need to generate them with `test:coverage` first                       |
| `stats`              | Open Webpack Bundle Analyzer reports. You need to generate them with `build` first                |
| `lint`               | Run ESLint and Prettier on `.tsx`, `.ts`, `.mdx` and `.js` files                                  |
| `type-check`         | Run Typescript compiler for types checking                                                        |
| `validate`           | Full code quality control: `lint`, `type-check`, `test:coverage` and `test:e2e` in one command    |
| `clean`              | Clean `public` and `.cache` folders for the moments when you cannot rely on cache                 |

\* — helper scripts. You don't need to run them yourself most of the time.

## 🧭 Detailed walkthrough

Here goes some details which can help you get starting. Also i will cover a few tricky parts of the setup.

### 🧱 Source content

In `src` folder you can find some low-level ready to use solutions:

1. **components/RootWrapper** — global wrapper with all providers to add to Gatsby, Storybook and RTL
1. **components/GlobalStyles** — place to include global styling like normalize, font-face, focus-visible and tags overrides
1. **components/Layout** — content which keeps the same between all pages like header & footer. Put your page content as its children
1. **components/Seo** — all meta tags to include in head via react-helmet. Reads defaults from siteMetadata, but can be overrided by props
1. **utils/typography** — helper to generate typography-related CSS from theme config
1. **utils/media** — helper to generate CSS media queries from breakpoints list in theme config
1. **utils/apollo** — Apollo Client setup

All others content was created for demo purposes. Remove it when starting a new project.

### ⚙️ Configuration

In `config` folder you can find the most of project settings:

1. **index.js** — variables for Gatsby config. Most of them are used as SEO and manifest data
1. **theme.ts** — theme variables which serves as Emotion theme

🚨 You can change theme object structure as you like, but keep in mind that `breakpoints` and `typography` fields are used in `media` and `typography` utils accordingly

### 💬 Typescript

🚨 Main config is written in `tsconfig.json`, but `cypress` folder has its own config which extends the main one. Additional config is required to avoid conflicts between global Jest and Chai/Mocha commands with the same namings

🚨 `types` field is used to **ONLY** include defined types for global scope. It requires to get Emotion `css` prop working and to avoid described conflicts between testing tools by including different types for them. Modify this array if you need to include new global scope typings

🚨 `include` field is used to run compiler only in defined directories because we again need to exclude `cypress` folder

### 🥇 Linting environment

Project setups ESLint config with collection of recommended rules from used tools and a few opinionated overrides. Feel free to change rules in `eslintrc.js`.

Prettier config is available in `.prettierrc`. Change it as you wish as well.

lint-staged runs `eslint`, `prettier` and `tsc` commands on changed files via Husky pre-commit hook.

🚨 Similar to Typescript, for ESLint in `cypress` folder additional config is defined to solve conflicts in rules between global Jest and Chai/Mocha commands

🚨 `eslintIgnore` field in `package.json` was added to include `.storybook` folder in list of linted directories because all dot folders are excluded by default. Otherwise i would just use `--ignore-path .gitignore` and be fine

### 🎲 Testing environment

This starter uses Jest with React Testing Library to create unit and integration tests, and Cypress to create E2E tests.

🚨 We need to render components within `RootProvider`, so i've created **test-utils** module as a wrapper around RTL. You now need to import `@test-utils` instead of `@testing-library/react` in test files. Read more about this approach in [official documentation](https://testing-library.com/docs/react-testing-library/setup#custom-render)

🚨 For Apollo Client mocking, `RootProvider` supports `apolloMocks` prop. Add this to replace ApolloProvider with MockedProvider with specified response. More about this approach in [Apollo Client docs](https://www.apollographql.com/docs/react/development-testing/testing/)

🚨 I was trying my best to include testing best practices here. For example, Jest and Cypress assertions are extended with assertions from RTL and `user-event` module is used instead of simple `fireEvent`. You can read more about all of these techniques in [Kent C. Dodds blog](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

### 🎨 Styling setup

Starter includes Emotion as the main styling solution with Polished library which includes some useful CSS in JS helpers.

Whole application wrapped with ThemeProvider so you get access to theme object on components level with `useTheme` hook or on styled components level via `theme` prop.

I prefer to use styled components and css prop object syntax, but it doesn't matter at all. Just choose what you prefer best.

🚨 Don't forget to give Typescript information about your theme by exporting its types from `@theme`. So it would be like `styled.div(({ theme }: ThemeProps) => ({})` for styled components and `useTheme<Theme>()` for the hook approach

### 📕 Storybook

Starter uses Storybook v6 with last bleeding-edge features like controls, docs mode, mdx support and more. It works with Gatsby so you can include components with static queries usage without splitting them in containers and pure components. And also stories are wrapped in `RootProvider`, so things like Apollo Client queries work too.

Modify stories formats and addons list in `.storybook/main` as you wish. Starter supports only mdx format by default.

🚨 To get Gatsby queries working you need to have `public/static` folder with pre-build static queries results. So make sure that you run `yarn dev` or `yarn build` command before. And if you change queries while in Storybook, you need to repeat this process again

🚨 Gatsby integration with Storybook was accidentally broken in the previous release (refer to [issue](https://github.com/gatsbyjs/gatsby/issues/26099)). As temporary solution `gatsby` and `babel-plugin-remove-graphql-queries` versions are locked in `package.json`. When this will be solved we can upgrade Gatsby and remove `resolutions` field

🚨 `.storybook/preview-head.html` file was added to override stories background color. In other way background will be the same as your global body color (in this demo its purple)

### 🖼 Assets management

Gatsby uses webpack under the hood, so all assets can be included in your scripts as modules via `import`.

🚨 Typescript doesn't know a thing about this, so `src/index.d.ts` file is intended to give him this type of knowledge

Svg files are converted in React components via `@svgr/webpack` in a build time so you get 1st class developer experience with icons and will ended with inline svg in markup which gives to your users the best of [performance and accessibility](https://medium.com/@marcintreder/design-system-sprint-6-the-fastest-icons-on-earth-bf91c0a47ef9).

Font assets are placed locally to give you more possibilities. For this demo i am using one variable font in woff2 format. For my supported browsers list this is enough, but you can also add `supports` check for variable font and fallback to simple woff2/woff assets of different weights

### ✨ PWA

Thanks to awesome Gatsby plugins, this starter doesn't do much with service worker itself. `gatsby-plugin-offline` uses Workbox which simplifies service worker setup a lot, and then simplifies it even more in one config line. But this is more than enough for the project with simple requirements. Anyway you have opportunity to extend basic service worker with your own custom code later if you need to.

Starter also generates `manifest.webmanifest` in `public` folder, includes all required meta tags in html template and generates favicons of all sizes. All you need to do is fill `config/index.js` with your own values and add the biggest favicon to generate other sizes from it — 512x512 png is recommended.

### 🚦 CI/CD

CI/CD includes validation checks (linting, type checking, unit and E2E testing), auto deploys of Storybook to Chromatic and Lighthouse checks. All these goes on pushes / pull requests in master branch. You can find Github Actions workflow in `.github/main.yml`.

Of course all of these is a personal thing, and you can create your own CI/CD process from scratch. Starter's purpose is just providing sensible defaults and at least give ready to use setup to future myself.

🚨 App deploys to Netlify are running automatically without additional setup requirements. All you need is to create a new project from Github repo on [Netlify website](https://app.netlify.com/signup)

🚨 Github Actions workflow requires you to have 2 secrets in your repository: `CHROMATIC_PROJECT_TOKEN` which you get when signed in with [Chromatic](https://www.chromatic.com/start) and `LHCI_GITHUB_APP_TOKEN` which you can get with [installing Lighthouse Github app](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md#github-app-method-recommended)

🚨 Lighthouse by default will run on **ALL** html files in `public` folder. In first, this takes a lot of time, and in second this includes `offline-plugin-app-shell-fallback` which is not a real page and will break your check. This is why i defined an array of URLs in `lighthouserc.js` to run Lighthouse with. Reconfigure them with your own pages (`index` at least)

### 📊 Bundle stats

Webpack Bundle Analyzer is an awesome tool to give you a sight on build content via cool D3 chart. `yarn build` command generates static report in `public` folder. To simplify access to report file i've added `yarn stats` command to open browser for you.

In addition to that, `yarn build` command generates `stats.json` file with Webpack stats which can be viewed via online tools like [Webpack Analyse](http://webpack.github.io/analyse/), [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/) and [Webpack Chart](https://alexkuz.github.io/webpack-chart/).

### 🌐 Browserslist

Browsers support is defined by specifying `browserslist` array in `package.json`. This starter supports only last 2 versions of popular browsers. If you want support more wide-range of browsers you can override this array or completely remove it to go with [Gatsby defaults](https://www.gatsbyjs.org/docs/browser-support/) which contains IE11.

### 💥 Aliases

To not write long unreliable import paths like `../../../config/theme` starter defines aliases to help:

1. **@/** — src folder. Component, for example, will be `import Seo from '@/components/Seo'`
1. **@test-utils** — test-utils module. Use it in test files like `import { render, screen } from '@test-utils'`
1. **@theme** — theme object. It is used to get Theme types or get theme properties outside of components. So it will be like `import {Theme} from '@theme'`

To create your own alias you need to add it to:

1. **gatsby-config.js** — to make it available in app through Webpack
1. **jest.config.js** — to make it available in testing environment
1. **.storybook/main.js** — to make it available in Storybook environment
1. **tsconfig.json** — to make Typescript understand it
1. **.eslintrc.js** — to make ESLint understand it

> Aaand this is it! Feel free to ask me more about the setup and i will appreciate if you give project a star ⭐️ - this levels up starter position in Gatsby catalog
