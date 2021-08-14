import React from 'react'
import SearchPlaces from '@components/SearchPlaces'
import useWeatherStore from '@stores/weatherStore'
import WeatherForecast from '@components/WeatherForecast'

const Home: React.FC = () => {
  const [{ isFetching, hasError, weather }, { setCity }] = useWeatherStore()
  return (
    <>
      <SearchPlaces onChange={(city) => setCity(city)} />
      <WeatherForecast
        isFetching={isFetching}
        hasError={hasError}
        forecast={weather?.forecast.forecastday}
        tz={weather?.location.tz_id}
      />
    </>
  )
}

export default Home
