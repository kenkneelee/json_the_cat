const request = require("request");
// Capture node command line argument of search query
const query = process.argv[2];
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${query}`,
  (error, response, body) => {
    // Print the error if one occurred
    if (error) {
      console.log("error:", error);
      return;
    }
    const data = JSON.parse(body);
    // if any search results exist, there will be a first element in the array
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log("No results found!");
    }
  }
);
