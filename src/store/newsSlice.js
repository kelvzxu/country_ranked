import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../utils/nytApi';

// Action untuk mengambil artikel
export const fetchNews = createAsyncThunk('news/fetchNews', async (section) => {
  const articles = await fetchArticles(section); // Mengambil artikel berdasarkan section
  return articles;
});

const initialState = {
  articles: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
