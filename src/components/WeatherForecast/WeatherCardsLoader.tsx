import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Loader from '@components/WeatherForecast/Loader'
import Grid from '@material-ui/core/Grid'

const WeatherCardsLoader: React.FC = () => {
  return (
    <>
      {[...Array(3).keys()].map((item) => (
        <Grid item xs={12} sm={4} key={item}>
          <Card data-qa="qa_weather-loading">
            <CardContent>
              <Loader />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  )
}

export default WeatherCardsLoader
