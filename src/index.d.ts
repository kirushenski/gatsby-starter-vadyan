type SvgrComponent = React.FC<
  React.SVGProps<SVGSVGElement> & {
    title?: string
  }
>

declare module '*.svg' {
  export const ReactComponent: SvgrComponent
  const value: string
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

declare module '*/config/theme'
