const app = require("./server/index");
const db = require("./util/database").mongoConnect;

db(() => {
  console.log("Listening ...");
  app.listen(process.env.PORT || 8080);
});
