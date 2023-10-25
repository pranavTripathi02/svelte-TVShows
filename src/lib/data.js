const fetchData = async () => {
    let data = await fetch("https://api.tvmaze.com/shows?page=1")
        .then((res) => res.json())
        .catch((err) => console.error(err));
    console.log(data);
    return data;
};
const data: any = await fetchData();
console.log("what");

export default data;
