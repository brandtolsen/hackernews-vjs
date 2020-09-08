// const apiData = {
//     url: 'https://hacker-news.firebaseio.com/v0/',
//     type: 'item',
//     id: '24382722',
// }

// const {url, type, id} = apiData
// const apiUrl = `${url}${type}/${id}.json`

// fetch(apiUrl)
//     .then( (data) => data.json())
//     .then( (hackernews) => generateHTML(hackernews))

// const generateHTML = (data) => {
//     console.log(data)
//     const html = `
//         <p class="hn-author">By ${data.by}</p>
//         <p class="hn-timestamp">${data.time}</p>
//         <h1 class="hn-title"><a href="${data.url}" target="_blank">${data.title}</a></h1>
//         <p class="hn-score"><svg class="poly" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L17.6603 15H0.339746L9 0Z" fill="white"/></svg>
//          ${data.score}</p>
//     `
//     const hackernewsDiv = document.querySelector('.hn-container')
//     hackernewsDiv.innerHTML = html
// }



var apiTopStories = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
var contentBox = document.querySelector("#contentBox");
var stories = [];
var storyList = document.querySelector("#storyList");

var app = {
  init: () => {
    app.fetchTopStories();
  },
  fetchTopStories: () => {
    fetch(apiTopStories)
      .then(response => response.json())
      .then(data => {
        var store = data.slice(0,10); // trim to top 10 stories
        store.forEach((item) => {
          app.fetchOneStory(item);
        })
      })
    setTimeout(app.finish, 2000); // delay 3 sec, then print all stories
    setTimeout(app.render, 2000);
  },
  fetchOneStory: (id) => {
    var target = "https://hacker-news.firebaseio.com/v0/item/" + id + ".json?print=pretty";
    fetch(target)
      .then(response => response.json())
      .then(data => {
        stories.push({
          title: data.title,
          url: data.url,
          author: data.by,
          time: data.time,
          score: data.score
        });
      })
  },
  render: () => {
    stories.forEach((story) => {
      var card = document.createElement("div")
      card.className = "col-md-4 my-3";
      var inner = document.createElement("div")
      inner.className = "col-md-12 h-100 item";
      var link = document.createElement("a");
      link.href = story.url;      
      link.textContent = story.title;
      link.target= "_blank";
      inner.appendChild(link);
      storyList.appendChild(card);
      card.appendChild(inner);
    })
  },
  finish: () => {
    console.log("Top stories", stories);
  }
}

app.init();