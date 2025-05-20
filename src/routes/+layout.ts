import { pageStore } from "../stores/store";
import type { TShow } from "../types";

export async function load({ fetch }) {
  const data: {
    shows: TShow[];
    topTen: TShow[];
    categories: string[];
    featuredShows: TShow[];
    popularTen: TShow[];
    loading: boolean;
  } = {
    shows: [],
    topTen: [],
    categories: [],
    featuredShows: [],
    popularTen: [],
    loading: true,
  };
  let pageNum = 199;
  // console.log("hi");
  pageStore.subscribe((num) => {
    pageNum = num;
  });
  const fetchShows = async () => {
    // console.log("loading", pageNum);
    try {
      const res = await fetch(`https://api.tvmaze.com/shows?page=${pageNum}`);
      await res
        .json()
        .then((raw: TShow[]) => {
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
        .catch((err) => console.error("Problem while fetching shows.", err));
    } catch (err) {
      console.error("error loading data", err);
    } finally {
      data.loading = false;
    }
    return data;
  };

  return fetchShows();
}
