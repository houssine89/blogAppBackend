const middleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
};
const errorMiddleware = (err,req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);

}

module.exports = {middleware,errorMiddleware}