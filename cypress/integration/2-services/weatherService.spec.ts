import { getWeatherForecast } from '@api/weatherService'
import Weather from '@interfaces/forecast'
import search from '../../fixtures/search.json'

describe('Weather service', () => {
  it(`gets 3-day weather forecast for city: "${search.cityFullName}"`, () => {
    return getWeatherForecast(search.cityFullName, search.count, Cypress.env('WEATHER_API_KEY')).then(
      (result: { data: Weather }) => {
        expect(result.data.location.name).to.equal(search.city)
        expect(result.data.forecast.forecastday.length).to.equal(search.count)
      }
    )
  })

  it(`gets 3-day weather forecast for city: "${search.cityFullName}" when days parameter is not set`, () => {
    return getWeatherForecast(search.cityFullName, undefined, Cypress.env('WEATHER_API_KEY')).then(
      (result: { data: Weather }) => {
        expect(result.data.location.name).to.equal(search.city)
        expect(result.data.forecast.forecastday.length).to.equal(search.count)
      }
    )
  })
})
