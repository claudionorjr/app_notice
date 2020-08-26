/**
 * @description: initFetch() é usado para fazer um fetch() na Api de news.
 * 
 * @param {action} text
 * @param {action} country
 * 
 * @see https://newsapi.org/
 */
export default async function initFetch(text, country) {
    let apiKey = `apiKey=06e42da03f0044469b0ea3844b845745`
    let baseUrl = `https://newsapi.org/v2`
    let everyThing = "everything"
    let url = ``
    text ?
    url = `${baseUrl}/${everyThing}?q=${text}&${apiKey}`
    :
    country ?
    url = `${baseUrl}/top-headlines?country=${country}&${apiKey}`
    :
    url = `${baseUrl}/top-headlines?country=br&${apiKey}`

    let response = await fetch(url)
    let data = await response.json()
    let news = data.articles
    return news
}
