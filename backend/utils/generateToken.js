const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  // ! You need to add JWT_SECRET to the .env file or directly here (example: 1234)
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
