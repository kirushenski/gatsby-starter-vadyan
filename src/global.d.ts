declare global {
  interface Window {
    ___navigate: (pathname: string) => void
  }
}

export {}
