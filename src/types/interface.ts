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

export interface EpisodeList {
    episodeId: string,
    episodeNum: string
}