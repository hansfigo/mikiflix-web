import axios from "axios";


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
    const apiUrl = 'https://gogoanime.consumet.stream/recent-release';
    return await fetchAnimeData(apiUrl);
  },

  async getPopularAnime() {
    const apiUrl = 'https://gogoanime.consumet.stream/top-airing';
    return await fetchAnimeData(apiUrl);
  }
};

export default apiService;
