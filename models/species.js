const dbConnection = require("../util/database").getDb;

class Species {
  static findByCharacterId(species) {
    const db = dbConnection();
    return db
      .collection("species")
      .find({ id: { $in: species } })
      .toArray()
      .then(result => {
        return result;
      })
      .catch(err => console.log(err));
  }
}

module.exports = Species;
