const mongoDb = require("mongodb");
const dbConnection = require("../util/database").getDb;

class Character {
  static findByCharacterId(persons) {
    const db = dbConnection();
    return db
      .collection("people")
      .find({ id: { $in: persons } })
      .toArray()
      .then(result => {
        return result;
      })
      .catch(err => console.log(err));
  }
}

module.exports = Character;
