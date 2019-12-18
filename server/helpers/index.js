const jwt = require('jsonwebtoken');
const passport = require('passport');

const secret = process.env.SECRET || 'some other secret as default';

exports.isAuthenticated = function() {
  return passport.authenticate('jwt', { session: false }), async function(req, res, next) {
    const username = req.user.username;
    if (req.user) {
      next()
    } else {
      return res.status(403).json({ message: 'User not found!' });
    }
  };
};
