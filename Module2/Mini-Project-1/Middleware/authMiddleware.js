const jwt = require('jsonwebtoken');

function isLoggedIn(req, res, next) {
  if (req.cookies.token) {
    try {
      let userData = jwt.verify(req.cookies.token, "lolopopo");
      // console.log(userData);
      res.userData = userData;
      next();
    } catch (error) {
      console.error("Token verification failed:", error);
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
}

module.exports = isLoggedIn;
