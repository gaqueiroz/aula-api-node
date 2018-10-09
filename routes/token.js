const jwt = require('jsonwebtoken');

module.exports = (router) => {
  router.post('/', (req, res) => {
    if (req.body.username === req.body.password) {
      const token = jwt.sign({ username: req.body.username }, process.env.SECRET);
      return res.json(token);
    }

    res.sendStatus(401);
  });

  return router;
};
