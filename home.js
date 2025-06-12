
//📂 3. Use Middleware in Protected Route (e.g. in routes/home.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/dashboard', auth, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}` });
});

module.exports = router;
