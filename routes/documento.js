module.exports = (router) => {
  router.get('/', (req, res) => {
    res.send('hello /documento');
  });

  router.get('/:id/participante', (req, res) => {
    console.log(req.params.id);
    res.send('hello /id/participante');
  });

  return router;
};