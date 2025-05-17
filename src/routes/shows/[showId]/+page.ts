import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
  const fetchShowInfo = async () => {
    return await fetch(
      `https://api.tvmaze.com/shows/${params.showId}?embed[]=cast&embed[]=images&embed[]=seasons`,
    )
      .then(async (res) => {
        return await res.json();
      })
      .catch((err) =>
        console.error("Something went wrong. Could not fetch show info", err),
      );
  };
  return await fetchShowInfo();
};
