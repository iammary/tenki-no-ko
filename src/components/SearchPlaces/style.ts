import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

export const StyledTextField = styled(TextField)`
  width: 100%;
`

export const StyledPaper = styled(Paper)`
  margin: ${({ theme }) => theme.spacing(3, 0)};
`
