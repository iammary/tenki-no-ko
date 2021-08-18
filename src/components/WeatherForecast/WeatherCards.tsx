import React from 'react'
import { Forecast } from '@interfaces/forecast'
import Grid from '@material-ui/core/Grid'
import WeatherCard from '@components/WeatherForecast/WeatherCard'

interface WeatherCardsProps {
  forecast: Forecast[]
  tz: string
}

const WeatherCards: React.FC<WeatherCardsProps> = ({ forecast, tz }) => {
  return (
    <>
      {forecast.map((item) => (
        <Grid item xs={12} sm={4} key={item.date_epoch}>
          <WeatherCard item={item} tz={tz} />
        </Grid>
      ))}
    </>
  )
}

export default WeatherCards
