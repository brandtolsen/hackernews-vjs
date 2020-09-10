# Hacker News Webpage

This web project displays 10 randomized Hacker News top stories using the Hacker News API (https://github.com/HackerNews/API).

Demo: https://hackernews-vjs.vercel.app/

The UI is responsive using bootstrap and includes:
* Story title
* Story URL
* Story timestamp
* Story score
* Author id
* An background-image (not from API)

In this project the following endpoints is being used:
* Top stories: https://hacker-news.firebaseio.com/v0/topstories.json
* Story item: https://hacker-news.firebaseio.com/v0/item/${id}.json
