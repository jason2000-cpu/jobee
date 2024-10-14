const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).json({ message: 'Something went wrong!' }); // Send generic error message
};

module.exports = errorMiddleware;

