// We use assets as modules with Webpack, so we need to tell Typescript what these imports mean

type SvgrComponent = React.FC<
  React.SVGProps<SVGSVGElement> & {
    /** SVG accessible name provided by `title` tag */
    title?: string
  }
>

declare module '*.svg' {
  const value: SvgrComponent
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.webp' {
  const value: string
  export default value
}

declare module '*.woff2' {
  const value: string
  export default value
}
