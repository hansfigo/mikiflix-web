export interface Anime {
    id?: string;
    malId?: number;
    title?: {
        romaji?: string;
        english?: string;
        native?: string;
        userPreferred?: string;
    };
    image?: string;
    trailer?: {
        id?: string;
        site?: string;
        thumbnail?: string;
    };
    episodeId?: string;
    episodeNumber?: number;
    episodeTitle?: string;
    description?: string;
    status?: string;
    cover?: string;
    rating?: number;
    releaseDate?: number;
    color?: string;
    genres?: string[];
    totalEpisodes?: number;
    duration?: number;
    type?: string;
}


export interface AnimeInfo {
    id?: string;
    title?: {
        romaji?: string;
        english?: string;
        native?: string;
    };
    malId?: number;
    synonyms?: string[];
    isLicensed?: boolean;
    isAdult?: boolean;
    countryOfOrigin?: string;
    trailer?: {
        id?: string;
        site?: string;
        thumbnail?: string;
    };
    image?: string;
    popularity?: number;
    color?: string;
    cover?: string;
    description?: string;
    status?: string;
    releaseDate?: number;
    startDate?: {
        year?: number;
        month?: number;
        day?: number;
    };
    endDate?: {
        year?: number;
        month?: number;
        day?: number;
    };
    nextAiringEpisode?: {
        airingTime?: number;
        timeUntilAiring?: number;
        episode?: number;
    };
    totalEpisodes?: number;
    currentEpisode?: number;
    rating?: number;
    duration?: number;
    genres?: string[];
    season?: string;
    studios?: string[];
    episodes? : Episode[]
}

interface Episode {
    id: string;
    title: string | null;
    description: string | null;
    number: number;
    image: string;
    airDate: string | null;
  }
  


export interface RecentAnime {
    id?: string;
    malId?: number;
    title: {
        romaji?: string;
        english?: string;
        native?: string;
        userPreferred?: string;
    };
    image: string;
    rating?: number;
    color?: string;
    episodeId?: string;
    episodeTitle?: string;
    episodeNumber: number;
    genres?: string[];
    type?: string;
}



export interface EpisodeList {
    id: string,
    episodeNum: string
}