import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const Wrapper = styled.div`
  text-align: center;
`

export const Temperature = styled(Typography)`
  margin: ${({ theme }) => theme.spacing(3, 0, 0)};
  letter-spacing: -1px;
  display: flex;
  align-items: flex-start;
  line-height: 1;
  flex-direction: row;
  justify-content: center;
  span {
    font-size: ${({ theme }) => `${theme.typography.fontSize}px`};
    padding: 4px;
  }
`

export const Date = styled(Typography)`
  font-size: ${({ theme }) => `${theme.typography.fontSize}px`};
`

export const Condition = styled(Typography)``
