import axios from "axios";
import { Anime, RecentAnime } from "../types/interface";

const url = "https://mikiflix-api.vercel.app/meta/anilist/"

async function fetchAnimeData(apiUrl: string, type: string) {
  try {

    const response = await fetch(apiUrl);

    const data = await response.json()
    if (type != 'info') {
      return data;
    } else {
      return data.data;
    }
  } catch (error) {
    throw error;
  }
}

export async function getRecentAnime(): Promise<RecentAnime[]>{
  const apiUrl = url + 'recent-episode';
  return await fetchAnimeData(apiUrl, 'general');
}

export async function getPopularAnime() : Promise<Anime[]> {
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

