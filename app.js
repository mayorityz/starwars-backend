const app = require("./server/index");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://candidate:PrototypeRocks123654@ds345028.mlab.com:45028/star-wars",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(result => {
    app.listen(process.env.PORT || 8080);
  })
  .catch(err => {
    console.log(err);
  });
