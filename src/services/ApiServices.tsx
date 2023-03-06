import axios from "axios";

const url = import.meta.env.VITE_API_KEY

async function fetchAnimeData(apiUrl: string, type: string) {
  try {
    const response = await axios.get(apiUrl);
    if (type === 'general') {
      return response.data['results'];
    } else if (type === 'info') {
      return response.data;
    }
  } catch (error) {
    // console.log(error);
    return [];
  }
}

const apiService = {
  async getRecentAnime() {
    const apiUrl = url + 'recent-episodes';
    return await fetchAnimeData(apiUrl, 'general');
  },

  async getPopularAnime() {
    const apiUrl = url + 'top-airing';
    return await fetchAnimeData(apiUrl, 'general');
  },

  async getDetailAnime(animeId: string | undefined) {
    const apiUrl = url + 'info/' + animeId;
    return await fetchAnimeData(apiUrl, 'info');
  },
  async searchAnime(querry: string | undefined) {
    const apiUrl = url + querry;
    return await fetchAnimeData(apiUrl, 'info');
  }
};

export default apiService;
