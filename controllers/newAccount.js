const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.newUser = async (req, res, next) => {
  /**
   * I found out that I am not "authorized to execute commands on the document
   * the code below who have save the data in the db.
   *
   */

  const { username, password } = req.body;
  let user = await User.findOne({ username: username });
  if (user) return res.status(400).send("User already registered.");

  user = new User({ username: username, password: password });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save().catch(err => {
    console.log(err);
  });
  return res.status(200).send("Your Account Has Been Created Successfully");
};
