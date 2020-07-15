declare namespace NodeJS {
  interface Global {
    ___loader: {
      enqueue: () => void
      hovering: () => void
    }
    __PATH_PREFIX__: string
    __BASE_PATH__: string
    ___navigate: (pathname: string) => void
  }
}

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

declare module '*.jpeg' {
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
