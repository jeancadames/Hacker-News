export const getNews = async(optionSelection) => {

    const url = `https://hn.algolia.com/api/v1/search?query=${optionSelection.option}`;

    const resp = await fetch(url);
    const {hits} = await resp.json();

    const news = hits.map(hit => ({
        title: hit.title,
        date: hit.created_at,
        author: hit.author,
        id: hit.created_at_i,
        url: hit.url,
    }));

    const hackerNews = news.filter((obj) => obj.author && obj.date && obj.title && obj.id !== null);

    return hackerNews;

}