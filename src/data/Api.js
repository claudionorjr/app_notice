export default async function initFetch() {
    let url = `https://newsapi.org/v2/top-headlines?country=br&apiKey=06e42da03f0044469b0ea3844b845745`
    let response = await fetch(url)
    let data = await response.json()
    let news = data.articles
    return news
}
