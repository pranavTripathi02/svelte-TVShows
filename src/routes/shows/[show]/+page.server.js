export async function load({ params }) {
    const showId = params.show;
    let data = { loading: true };
    try {
        const showInfo = await fetch(`https://api.tvmaze.com/shows/${showId}`).then(
            (res) => res.json(),
        );
        data.showInfo = showInfo;

        const showImages = await fetch(
            `https://api.tvmaze.com/shows/${showId}/images`,
        ).then((res) => res.json());
        data.showInfo.showImages = showImages;

        const showCast = await fetch(
            `https://api.tvmaze.com/shows/${showId}/cast`,
        ).then((res) => res.json());
        data.showInfo.showCast = showCast;

        const showSeasons = await fetch(
            `https://api.tvmaze.com/shows/${showId}/seasons`,
        ).then((res) => res.json());
        data.showInfo.showSeasons = showSeasons;

        // const showCast = await fetch(
        //     `https://api.tvmaze.com/shows/${showId}/images`,
        // ).then((res) => res.json());
        // data.showInfo.showCast = showCast;
    } catch (err) {
        console.error(err);
    } finally {
        data.loading = false;
    }
    return data;
}
// export const fetchShow = async () => {
//     const pageNum = Math.ceil(Math.random() * 249);
//     const data = {
//         shows: [],
//         topTen: [],
//         categories: [],
//         featuredShows: [],
//         popularTen: [],
//     };
//     try {
//         const res = await fetch(`https://api.tvmaze.com/shows?page=${pageNum}`);
//         await res
//             .json()
//             .then((raw) => {
//                 data.shows = raw.sort((a, b) => b?.weight - a?.weight);
//
//                 data.featuredShows = data.shows?.slice(0, 10);
//
//                 data.popularTen = data.shows?.slice(0, 10);
//
//                 data.topTen = data.shows
//                     .sort((a, b) => b?.rating?.average - a?.rating?.average)
//                     .slice(0, 10);
//
//                 for (let i = 0; i < data.shows.length; i++) {
//                     data.shows[i].genres?.filter((item) => {
//                         const j = data.categories.findIndex((x) => x == item);
//                         if (j <= -1) data.categories.push(item);
//                     });
//                 }
//             })
//             .catch((err) => console.error(err));
//         showStore.set({ ...data, loading: false });
//     } catch (err) {
//         console.error("error loading data", err);
//     }
// };
// fetchShows();
// // await fetchShows();
