export interface AnimeInfo {
    animeTitle: string,
    type: string,
    relasedDate: string,
    status: string,
    genres: string[],
    synopsis: string,
    animeImg: string,
    totalEpisodes: string,
    episodesList: EpisodeList[]
}

export interface Anime {
    id: string;
    title: string;
    image: string;
    releaseDate: string | null;
    subOrDub: 'sub' | 'dub';
  }
  

export interface EpisodeList {
    id: string,
    episodeNum: string
}