import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch countries from API
export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  const countries = response.data
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
      subregion: country.subregion,
      code: country.cca2,
      flag: country.flags.png,
      area: country.area,
      symbol: country.coatOfArms,
      phonecode: country.idd,
    }))
    .sort((a, b) => b.population - a.population);
  
  // Store the fetched countries in localStorage
  localStorage.setItem('countries', JSON.stringify(countries));

  return countries;
});

const countrySlice = createSlice({
  name: 'countries',
  initialState: {
    data: JSON.parse(localStorage.getItem('countries')) || [],  // Retrieve from localStorage if available
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
