import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export default function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    // appDrawer: {
    //   width: 225,
    //   breakpoint: 'lg',
    // },
    ...options,
  })
}