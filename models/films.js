const mongoDb = require("mongodb");
const dbConnection = require("../util/database").getDb;

class Films {
  static fetchAll() {
    const db = dbConnection();
    return db
      .collection("films")
      .find()
      .toArray()
      .then(result => {
        return result;
      })
      .catch(err => console.log(err));
  }

  static findByOpeningCrawl(crawl) {
    const db = dbConnection();
    return db
      .collection("films")
      .find({ opening_crawl: crawl })
      .next()
      .then(result => {
        return result;
      })
      .catch(err => console.log(err));
  }
}

module.exports = Films;
