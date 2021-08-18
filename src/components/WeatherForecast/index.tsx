import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Forecast } from '@interfaces/forecast'
import WeatherCardsLoader from '@components/WeatherForecast/WeatherCardsLoader'
import WeatherCards from '@components/WeatherForecast/WeatherCards'

interface WeatherForecastProps {
  isFetching: boolean
  hasError: boolean
  forecast?: Forecast[]
  tz?: string
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ isFetching, hasError, forecast, tz }) => {
  if (!isFetching && !forecast) {
    return null
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="stretch"
      spacing={3}
      id="weather-forecast"
    >
      {(() => {
        if (isFetching) {
          return <WeatherCardsLoader />
        }
        if (hasError) {
          return <div data-qa="qa_weather-error">Error</div>
        }
        if (forecast && tz) {
          return <WeatherCards forecast={forecast} tz={tz} />
        }
        return null
      })()}
    </Grid>
  )
}

export default WeatherForecast
