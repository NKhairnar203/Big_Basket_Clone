const User = require("../models/user.model");

const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });
    res.status(200).json({
      message: " Register Successfully...",
      token: await user.generateToken(),
      UserID: user._id.toString(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "Invalid Credintials..." });
    }

    const isMatch = await user.comparePassword(password);
    // console.log(isMatch);
    if (!isMatch) {
      return res.status(404).json({ message: "Invalid Credintials..." });
    }
    res.status(200).json({
      message: "Login Successfully...",
      token: await user.generateToken(),
      UserID: user._id.toString(),
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { Register, Login };
