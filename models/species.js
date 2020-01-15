const mongoDb = require("mongodb");
const dbConnection = require("../util/database").getDb;

class Species {
  static findByCharacterId(species) {
    const db = dbConnection();
    return db
      .collection("species")
      .find({ id: { $in: species } }, { name: 1, people: 1 })
      .toArray()
      .then(result => {
        return result;
      })
      .catch(err => console.log(err));
  }
}

module.exports = Species;
