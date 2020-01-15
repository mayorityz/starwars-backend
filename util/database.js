const MongoClient = require("mongodb").MongoClient;
let _db;
const Connection = cb => {
  MongoClient.connect(
    "mongodb://candidate:PrototypeRocks123654@ds345028.mlab.com:45028/star-wars",
    { useUnifiedTopology: true }
  )
    .then(result => {
      _db = result.db();
      cb();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Db Found!";
};

exports.mongoConnect = Connection;
exports.getDb = getDb;
