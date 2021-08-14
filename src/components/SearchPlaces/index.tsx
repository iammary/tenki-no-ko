import React from 'react'
import Grid from '@material-ui/core/Grid'
import usePlacesAutocomplete from 'use-places-autocomplete'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { StyledTextField, StyledPaper } from '@components/SearchPlaces/style'

interface SearchPlacesProps {
  onChange: (city?: string) => void
}

const SearchPlaces: React.FC<SearchPlacesProps> = ({ onChange }) => {
  const {
    ready,
    suggestions: { data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ['(cities)'],
    },
    cache: 24 * 60 * 60,
    debounce: 300,
  })

  const handleInput = (e: { target: { value: string } }) => {
    setValue(e.target.value)
  }

  const handleSelect = async (_e: any, newValue: { description: string; place_id: any }) => {
    if (newValue?.description) {
      setValue(newValue.description, false)
      clearSuggestions()
    }
    onChange(newValue?.description)
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <StyledPaper elevation={0}>
          <Autocomplete
            disabled={!ready}
            options={data}
            id="places-search"
            freeSolo
            onChange={handleSelect}
            autoHighlight
            getOptionLabel={(option) => option.description}
            renderOption={(option) => <>{option.description}</>}
            renderInput={(params) => (
              <StyledTextField
                {...params}
                label="Search city"
                variant="outlined"
                onChange={handleInput}
                placeholder="Enter a city to view 3-day forecast"
                size="medium"
              />
            )}
          />
        </StyledPaper>
      </Grid>
    </Grid>
  )
}

export default SearchPlaces
