import React from 'react'
import { Forecast } from '@interfaces/forecast'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import moment from 'moment-timezone'
import { Wrapper, Temperature, Date, Condition } from './style'

interface WeatherCardsProps {
  forecast: Forecast[]
  tz: string
}

const WeatherCards: React.FC<WeatherCardsProps> = ({ forecast, tz }) => {
  return (
    <>
      {forecast.map((item) => (
        <Grid item xs={12} sm={4} key={item.date_epoch}>
          <Card>
            <CardContent>
              <Wrapper>
                <img src={`https:${item.day.condition.icon}`} alt={item.day.condition.text} />
                <Date variant="body1" color="textSecondary">
                  {moment.unix(item.date_epoch).tz(tz).format('DD MMMM YYYY')}
                </Date>
                <Condition color="textSecondary">{item.day.condition.text}</Condition>
                <Temperature variant="h3" data-qa="qa_temp-display">
                  {item.day.avgtemp_c} <span>&#8451;</span>
                </Temperature>
              </Wrapper>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  )
}

export default WeatherCards
