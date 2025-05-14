export async function load({ fetch, params }) {
  const showId = params.showId;
  let data = { loading: true };
  const fetchShowInfo = async () => {
    const showInfo = await fetch(`https://api.tvmaze.com/shows/${showId}`).then(
      (res) => res.json(),
    );
    data.loading = false;
    return showInfo;
  };
  const fetchShowImages = async () => {
    const showImages = await fetch(
      `https://api.tvmaze.com/shows/${showId}/images`,
    ).then((res) => res.json());
    data.loading = false;
    return showImages;
  };
  const fetchShowCast = async () => {
    const showCast = await fetch(
      `https://api.tvmaze.com/shows/${showId}/cast`,
    ).then((res) => res.json());
    data.loading = false;
    return showCast;
  };
  const fetchShowSeasons = async () => {
    const showSeasons = await fetch(
      `https://api.tvmaze.com/shows/${showId}/seasons`,
    ).then((res) => res.json());
    data.loading = false;
    return showSeasons;
  };
  return {
    showInfo: fetchShowInfo(),
    showImages: fetchShowImages(),
    showCast: fetchShowCast(),
    showSeasons: fetchShowSeasons(),
  };
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
