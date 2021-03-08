<p align="center">
  <a href="https://github.com/p1t1ch/gatsby-starter-vadyan">
    <img
      src="src/images/logo-text.png"
      height="160"
      alt="Gatsby Starter Vadyan"
    />
  </a>
</p>

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
</p>

## Why?

This starter’s purpose is to help you setup essential tools like Typescript, ESLint, Jest and Storybook on the top of Gatsby. Otherwise you need to repeat this tedious process from project to project. Unlike the most starters `gatsby-starter-vadyan` doesn't make opinions about your site content: it just gives you the opinionated setup of trending frontend tools which I used for myself

## Hot features

- [x] ⚡️ Based on `Gatsby@3`
- [x] 🏔 Modern setup with `Webpack@5` and `React@17`
- [x] 💬 Static type checking with `Typescript`
- [x] 🥇 Bulletproof dev environment with `ESLint`, `Prettier`, `husky` & `lint-staged`
- [x] 🎲 Test environment with `Jest` & `react-testing-library`
- [x] 🎨 Utility-first styling with `Tailwind`
- [x] 📕 Supports `Storybook@6` with docs and controls
- [x] 🖼 Work with images like a pro with `gatsby-plugin-image` and `SVGR`
- [x] 📦 Full PWA on `Workbox` under the hood with manifest support and automatic favicons generation
- [x] ✅ Simple workflow example to get started with `Github Actions`
- [x] 🤖 Build-in SEO component to improve SEO with `React Helmet`
- [x] 📊 Analyze generated build with `Webpack Bundle Analyzer`
- [x] 💥 Simplified imports with `Webpack Aliases`

## Quick start

> Project requires `node` >= 12.13.0 and uses `npm` as the package manager

1. **Create a Gatsby site**

   You can use [Gatsby CLI](https://www.gatsbyjs.com/docs/gatsby-cli/):

   ```shell
   gatsby new project-name https://github.com/p1t1ch/gatsby-starter-vadyan
   ```

   Or use Github template feature — simply click on the button "Use this template"

1. **Setup the project**

   Install dependencies and run validation scripts:

   ```shell
   npm run setup
   ```

1. **Run the application**

   This script starts the development server on http://localhost:8000:

   ```shell
   npm start
   ```

## Scripts list

| `npm run <command>` | Description                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------ |
| `start`             | Build app in dev mode and start development server on 8000                                 |
| `build`             | Build app in prod mode in `public` folder                                                  |
| `serve`             | Browse production build from `public` folder locally on 8000                               |
| `storybook`         | Start a Storybook in dev mode on random port                                               |
| `test`              | Run Jest in watch mode                                                                     |
| `test:coverage`     | Run Jest in coverage mode. Use in CI or locally when you want to generate coverage reports |
| `coverage`          | Оpen coverage reports. You need to generate them with `test:coverage` first                |
| `stats`             | Open Webpack Bundle Analyzer reports. You need to generate them with `build` first         |
| `lint`              | Run ESLint in fix mode on `.tsx`, `.ts` and `.js` files except of ignored folders          |
| `format`            | Run Prettier in write mode on all files except of ignored folders                          |
| `type-check`        | Run Typescript compiler for types checking                                                 |
| `validate`          | Full code quality control: `lint`, `format`, `type-check` and `test:coverage`              |
| `clean`             | Clean `public` and `.cache` folders for the moments when you cannot rely on cache          |
| `setup`             | Install dependencies and run validation script                                             |

## Notes

1. If you are using `npm@7` always run `npm i` with `--legacy-peer-deps` flag to avoid conflicts between tools
1. Make sure that `public` directory exists before trying to run Storybook (run `npm start` for once)
1. This starter uses beta version of Storybook to support `webpack@5` and `postcss@8`. Unfortunately `build-storybook` command doesn't work at the moment of writing. Follow the issue: https://github.com/storybookjs/storybook/issues/13893
