const app = require("./server/index");
const db = require("./util/database").mongoConnect;

db(() => {
  console.log("Listening ...");
  app.listen(8080);
});
