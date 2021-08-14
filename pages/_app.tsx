import { useEffect } from 'react'
import theme from '@theme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import { defaults } from 'react-sweet-state'
import { NoSsr } from '@material-ui/core'
import PageLayout from '@layouts/PageLayout'

defaults.devtools = true

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <NoSsr>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </NoSsr>
      </MuiThemeProvider>
    </ThemeProvider>
  )
}

export default App
