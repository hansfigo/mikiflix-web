import axios from "axios";

const url = import.meta.env.VITE_API_KEY

async function fetchAnimeData(apiUrl: string) {
  try {
    const response = await axios.get(apiUrl);
    return response.data
  } catch (error) {
    console.log(error);
    return [];
  }
}

const apiService = {
  async getRecentAnime() {
    const apiUrl = url + 'recent-release';
    return await fetchAnimeData(apiUrl);
  },

  async getPopularAnime() {
    const apiUrl = url + 'top-airing';
    return await fetchAnimeData(apiUrl);
  },

  async getDetailAnime(animeId: string | undefined) {
    const apiUrl = url + 'anime-details/' + animeId;
    return await fetchAnimeData(apiUrl);
  }
};

export default apiService;
