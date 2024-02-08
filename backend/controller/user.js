const userModel = require("../model/user");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  let data = req.body;

  const { password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  data = { ...data, password: hash };
  const user = new userModel(data);
  try {
    const response = await user.save();
    res.json({ response });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = { register };
