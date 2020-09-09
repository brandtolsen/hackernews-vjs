var apiTopStories = "https://hacker-news.firebaseio.com/v0/topstories.json";
var contentBox = document.querySelector("#contentBox");
var stories = [];
var users = [];
var storyList = document.querySelector("#storyList");

var app = {
  init: () => {
    app.fetchTopStories();
  },
  fetchTopStories: () => {
    fetch(apiTopStories)
      .then(response => response.json())
      .then(data => {
        var store = data.slice(0,10); // show top 10 stories
        store.forEach((item) => {
          app.fetchOneStory(item);
        })
        store.forEach((user) => {
          app.fetchOneUser(user);
        })
      })
    setTimeout(app.finish, 1000);
    setTimeout(app.render, 1000);
  },
  fetchOneStory: (id) => {
    var target = "https://hacker-news.firebaseio.com/v0/item/" + id + ".json";
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
  fetchOneUser: (id) => {
    var target = "https://hacker-news.firebaseio.com/v0/user/" + id + ".json";
    fetch(target)
      .then(response => response.json())
      .then(data => {
        users.push({

        });
      })
  },
  render: () => {
    stories.forEach((story) => {
      // Adding card
      var card = document.createElement("div")
      card.className = "col-md-4 my-3";
      storyList.appendChild(card);
      // Adding inner card
      var inner = document.createElement("div")
      inner.className = "col-md-12 h-100 item";
      card.appendChild(inner);
      // Adding author
      var authors = document.createElement("p")
      authors.className = "hn-author";
      authors.textContent = story.author;
      inner.appendChild(authors);
      // Adding story timestamp
      var timestamp = document.createElement("p")
      timestamp.className = "hn-timestamp";
      timestamp.textContent = story.time;
      inner.appendChild(timestamp);
      // Adding story title with URL
      var link = document.createElement("a");
      link.className = "hn-title";
      link.href = story.url;
      link.textContent = story.title;
      link.target= "_blank";
      inner.appendChild(link);
      // Adding story score
      var score = document.createElement("p")
      score.className = "hn-score";
      score.textContent = story.score;
      inner.appendChild(score);
    })
  },
  finish: () => {
    console.log("Top stories", stories);
    console.log("users", users);
  }
}

app.init();