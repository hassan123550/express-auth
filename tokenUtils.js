const jwt = require('jsonwebtoken');

function generateAccessToken(userId) {
  return jwt.sign({ userId }, 'your_jwt_secret', { expiresIn: '1h' });
}

function generateRefreshToken(userId) {
  return jwt.sign({ userId }, 'your_refresh_secret', { expiresIn: '7d' });
}

module.exports = { generateAccessToken, generateRefreshToken };
