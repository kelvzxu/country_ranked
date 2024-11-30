import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data
    .map((country) => ({
      name: country.name.common,
      officialName: country.name.official,
      population: country.population,
      currencies: country.currencies,
      capital: country.capital, 
      region: country.region,
      maps: country.maps.googleMaps,
      timezones: country.timezones,
      languages: country.languages,
      continents: country.continents,
      code: country.cca2,
      flag: country.flags.png,
    }))
    .sort((a, b) => b.population - a.population);
});

const countrySlice = createSlice({
  name: 'countries',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default countrySlice.reducer;
