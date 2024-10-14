const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`); // Log the HTTP method and URL
  next(); // Proceed to the next middleware or route handler
};

module.exports = loggerMiddleware;

