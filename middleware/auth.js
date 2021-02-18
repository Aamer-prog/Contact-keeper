const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  //Ask from the header then by (sending to "x-auth-token" which is the key to the token inside the header)
  const token = req.header('x-auth-token');
  // Check if there is no token
  if (!token) {
    return res.status(401).json({ mes: 'No token, authorization denied' });
  }
  // If there is a token you want to varify it and pul out the payload and call it "decoded"
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // Take the "user" from the entire "token payload" which is called "decoded" and asign it to "req.user", then call next() tomove on
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
