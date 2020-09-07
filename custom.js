const apiData = {
    url: 'https://hacker-news.firebaseio.com/v0/',
    type: 'item',
    id: '24399392',
}

const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}.json`

fetch(apiUrl)
    .then( (data) => data.json())
    .then( (hackernews) => generateHTML(hackernews))

const generateHTML = (data) => {
    console.log(data)
    const html = `
        <p class="hn-author">By ${data.by}</p>
        <p class="hn-timestamp">${data.time}</p>
        <h1 class="hn-title"><a href="${data.url}" target="_blank">${data.title}</a></h1>
        <p class="hn-score"><svg class="poly" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L17.6603 15H0.339746L9 0Z" fill="white"/></svg>
         ${data.score}</p>
    `
    const hackernewsDiv = document.querySelector('.hn-container')
    hackernewsDiv.innerHTML = html
}
