import { createStore, createHook, StoreActionApi } from 'react-sweet-state'
import { getWeatherForecast } from 'src/api/weatherService'
import Weather from '@interfaces/forecast'

interface CropLayer {
  city?: string
  isFetching: boolean
  hasError: boolean
  weather?: Weather
}

type StoreApi = StoreActionApi<CropLayer>

const initialState = {
  city: undefined,
  isFetching: false,
  hasError: false,
  weather: undefined,
}

const actions = {
  setCity: (city?: string) => {
    return async ({ setState }: StoreApi) => {
      setState({ city })
      if (city) {
        setState({ isFetching: true })
        try {
          const weather = await getWeatherForecast(city)
          setState({
            hasError: false,
            weather: weather.data,
          })
        } catch (e) {
          setState({
            hasError: true,
            weather: undefined,
          })
        } finally {
          setState({ isFetching: false })
        }
      } else {
        setState({ weather: undefined })
      }
    }
  },
}

const Store = createStore<CropLayer, typeof actions>({
  initialState,
  actions,
  name: 'weatherStore',
})

const useWeatherStore = createHook(Store)
export default useWeatherStore
