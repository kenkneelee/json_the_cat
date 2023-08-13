const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      // Print the error if one occurred
      if (error) {
        callback(error, null);
        return;
      }
      const data = JSON.parse(body);
      // if any search results exist, there will be a first element in the array
      if (data[0]) {
        callback(null, data[0].description);
      } else {
        callback(null, "No results found!");
      }
    }
  );
};

module.exports = { fetchBreedDescription };
