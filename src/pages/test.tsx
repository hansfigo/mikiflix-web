const request = async (apiUrl: string) => {

    const data = await (await fetch(apiUrl)).json()

    return data
}



const Api = {

    async getRecentAnime() {
        const apiUrl = "https://gogoanime.consumet.stream/recent-release";
        return await request(apiUrl);

    },

    async getPopularAnime() {
        const apiUrl = "https://gogoanime.consumet.stream/popular";
        return await request(apiUrl);
    }
}
export default Api;