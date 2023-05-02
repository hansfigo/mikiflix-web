import axios from "axios";

const url = import.meta.env.VITE_API_KEY

async function fetchAnimeData(apiUrl: string, type: string) {
  try {
    const response = await axios.get(apiUrl);
    if (type != 'info') {
      return response.data['results'];
    } else {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
}

export async function getRecentAnime() {
  const apiUrl = url + 'recent-episodes';
  return await fetchAnimeData(apiUrl, 'general');
}

export async function getPopularAnime() {
  const apiUrl = url + 'popular';
  return await fetchAnimeData(apiUrl, 'general');
}

export async function getDetailAnime(animeId: string | undefined) {
  const apiUrl = url + 'info/' + animeId;
  const res = await fetchAnimeData(apiUrl, 'info')
  console.log("API",res);
  return await fetchAnimeData(apiUrl, 'info');
}
export async function searchAnime(querry: string | undefined) {
  const apiUrl = url + querry;
  return await fetchAnimeData(apiUrl, 'general');
}

