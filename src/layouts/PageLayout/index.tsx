import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const PageLayout: React.FC = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Grid container direction="row" justifyContent="center">
        <Grid container>{children}</Grid>
      </Grid>
    </Container>
  )
}

export default PageLayout
