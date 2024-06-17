
const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(url, (error, response) => {
    if (error) {
      return callback(error, null);
    }

    const data = response.body;

    if (data.length === 0) {
      return callback("Breed not found", null);
    }

    const breed = data[0];
    callback(null, breed.description);
  });
};

module.exports = { fetchBreedDescription };

