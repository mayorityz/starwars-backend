const Films = require("../models/films");

exports.FetchFilms = (req, res, next) => {
  Films.fetchAll()
    .then(result => {
      const openingCrawls = result.map(film => film["opening_crawl"]);
      const longestCrawl = openingCrawls.reduce((a, b) => {
        return a.length > b.length ? a : b;
      });
      Films.findByOpeningCrawl(longestCrawl)
        .then(result => res.status(200).json(result["title"]))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};
