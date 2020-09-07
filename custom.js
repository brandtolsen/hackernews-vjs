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
        <h1 class="hn-title"><a href="${data.url}" target="_blank">${data.title}</a></h1>
        <p class="hn-author">${data.by}</p>
        <p class="hn-score">${data.score}</p>
        <p class="hn-timestamp">${data.time}</p>
    `
    const hackernewsDiv = document.querySelector('.hn-container')
    hackernewsDiv.innerHTML = html
}



// axios
// .get("https://api.hnpwa.com/v0/newest/1.json")
// .then(function (response) {
//     createListItem(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

// // Create list item
// // Add to DOM

// function createListItem (response) {
//     response.data.forEach(function(listItem){
//         // Create list item
//         var li = document.createElement("li");
//         li.setAttribute("class", "list-group-item");

//         // Create point badge
//         var span = document.createElement("span");
//         span.setAttribute("class", "badge badge-primary");
//         span.innerHTML = listItem.points;

//         var anchor = document.createElement("a");
//         anchor.setAttribute("href", listItem.url);
//         anchor.setAttribute("target", "_blank");
//         anchor.innerHTML = listItem.title;
//         anchor.prepend(span);

//         li.appendChild(anchor);

//         document.querySelector(".list-group").appendChild(li);
//         });
// }