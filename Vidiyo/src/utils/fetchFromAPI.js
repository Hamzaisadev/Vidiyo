import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 40,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const fetchFromAPI = async (url, pageToken) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, {
    params: {
      maxResults: 25,
      pageToken,
      type: "video",
      regionCode : "PK"
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  });

  return data;
};

export { fetchFromAPI, BASE_URL };