function displayNews() {
  var search = $("#search").val;
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    search +
    "&api-key=uULG05nlV3Ji5oVAfeWGzoxmxQFjG9bi";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data;
    console.log(results);
  });
}
$(document).on("click", "#submit", displayNews);
