export async function load() {
    console.log("home server");
    let data;
    data = await fetch("https://api.tvmaze.com/shows/1")
        .then((res) => res.json())
        .catch((err) => console.error(err));
    console.log(data);
    return { data };
}
