const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://mayorityz:2nHBAZJSoiRLkYkB@mayorityz-coy6d.mongodb.net/resturant?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(result => {
    console.log("mongoose is live");
  })
  .catch(err => console.log(err));
