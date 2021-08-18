import axios from 'axios'

const BASE_URL = 'https://api.weatherapi.com/v1'

export const getWeatherForecast = async (query: string, days: number = 3, keyOverride?: string) => {
  return await axios.get(
    `${BASE_URL}/forecast.json?key=${
      keyOverride || process.env.NEXT_PUBLIC_WEATHER_API_KEY
    }&q=${query}&days=${days}&aqi=no&alerts=no`
  )
}
