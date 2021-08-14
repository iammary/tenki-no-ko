import { createTheme, responsiveFontSizes } from '@material-ui/core'

const theme = responsiveFontSizes(
  createTheme({
    spacing: (x) => `${x * 8}px`,
  })
)

export default theme
