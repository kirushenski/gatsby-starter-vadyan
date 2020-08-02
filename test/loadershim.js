// Override some globals so Gatsby Link doesn't crash Jest / Storybook
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
global.__PATH_PREFIX__ = ''
global.__BASE_PATH__ = ''
