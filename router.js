module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.send(['foo', 'bar', 'baz', 'qux']);
  });
};
