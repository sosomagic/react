import axios from "axios";

const KEY = "AIzaSyCan89pCXOy41d7yGlRHv890T0u0EtoWAQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY
  }
});
