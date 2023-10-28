import { pageStore } from "../stores/store";

export async function load({ fetch }) {
  const data = {
    shows: [],
    topTen: [],
    categories: [],
    featuredShows: [],
    popularTen: [],
    loading: true,
  };
  let pageNum = 50;
  pageStore.subscribe((num) => {
    pageNum = num;
  });
  // $: pageNum = $pageStore;
  const fetchShows = async () => {
    console.log("loading", pageNum);
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
    } finally {
      data.loading = false;
    }
    return data;
  };

  return {
    shows: fetchShows(),
  };
}
