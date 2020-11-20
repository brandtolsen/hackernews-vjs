# Hacker News Webpage

![Hacker-News](https://user-images.githubusercontent.com/57196671/99824993-c22f6580-2b56-11eb-8ea5-42c9768ab5e6.png)

This project displays 10 randomized Hacker News top stories using the Hacker News API (https://github.com/HackerNews/API).

Demo: https://hackernews-vjs.vercel.app/

The UI is responsive using bootstrap and includes:
* Story title
* Story URL
* Story timestamp
* Story score
* Author id
* An background-image (not from API)

The following endpoints is being used:
* Top stories: https://hacker-news.firebaseio.com/v0/topstories.json
* Story item: https://hacker-news.firebaseio.com/v0/item/${id}.json
