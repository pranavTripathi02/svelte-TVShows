export async function load() {
    const pageNum = Math.ceil(Math.random() * 249);
    const data = {
        shows: [],
        topTen: [],
        categories: [],
        featuredShows: [],
        popularTen: [],
    };
    try {
        const res = await fetch(`https://api.tvmaze.com/shows?page=${pageNum}`);
        await res
            .json()
            .then((raw) => {
                data.shows = raw.sort((a, b) => b?.weight - a?.weight);

                data.featuredShows = data.shows?.slice(0, 10);

                data.popularTen = data.shows?.slice(0, 10);

                data.topTen = data.shows
                    .sort((a, b) => b?.rating?.average - a?.rating?.average)
                    .slice(0, 10);

                for (let i = 0; i < data.shows.length; i++) {
                    data.shows[i].genres?.filter((item) => {
                        const j = data.categories.findIndex((x) => x == item);
                        if (j <= -1) data.categories.push(item);
                    });
                }
            })
            .catch((err) => console.error(err));
        // showStore.set({ ...data, loading: false });
    } catch (err) {
        console.error("error loading data", err);
    }
    return data;
}
