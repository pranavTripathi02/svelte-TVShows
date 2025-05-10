import type { TShow } from "../types";

export async function load({ fetch }) {
  let shows = [] as TShow[];
  let isLoading = false;
  const pageNum = Math.floor(Math.random() * 200 + 1);
  console.log(pageNum);
  const fetchShows = async () => {
    isLoading = true;
    try {
      const res = await fetch(
        `https://api.tvmaze.com/shows?page=${pageNum}`,
      ).then((res) => res.json());
      shows = [...shows, ...res];
      console.log(shows, res);
    } catch (err) {
      console.error("error loading data", err);
    } finally {
      isLoading = false;
    }
    return shows;
  };

  return { data: fetchShows(), isLoading };
}
