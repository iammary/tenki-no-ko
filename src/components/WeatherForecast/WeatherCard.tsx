import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import { Condition, Date, Temperature, Wrapper } from '@components/WeatherForecast/style'
import moment from 'moment-timezone'
import Card from '@material-ui/core/Card'
import { Forecast } from '@interfaces/forecast'

interface WeatherCardProps {
  item: Forecast
  tz: string
}

const WeatherCard: React.FC<WeatherCardProps> = ({ item, tz }) => {
  return (
    <Card>
      <CardContent>
        <Wrapper>
          <img src={`https:${item.day.condition.icon}`} alt={item.day.condition.text} data-qa="qa_weather-icon" />
          <Date variant="body1" color="textSecondary" data-qa="qa_weather-date">
            {moment.unix(item.date_epoch).tz(tz).format('DD MMMM YYYY')}
          </Date>
          <Condition color="textSecondary" data-qa="qa_weather-condition">
            {item.day.condition.text}
          </Condition>
          <Temperature variant="h3" data-qa="qa_temp-display">
            {item.day.avgtemp_c} <span>&#8451;</span>
          </Temperature>
        </Wrapper>
      </CardContent>
    </Card>
  )
}

export default WeatherCard
