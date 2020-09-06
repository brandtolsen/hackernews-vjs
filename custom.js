


axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});