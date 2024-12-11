// src/utils/nytApi.js

import axios from 'axios';

const apiKey = 'SvjfXwxkNLAHi2dWDM3bjHltfkWwqw8E'; // Gantilah dengan kunci API Anda
const baseUrl = 'https://api.nytimes.com/svc/topstories/v2/';

export const fetchArticles = async (section = 'home') => {
  try {
    const response = await axios.get(`${baseUrl}${section}.json`, {
      params: {
        'api-key': apiKey,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
