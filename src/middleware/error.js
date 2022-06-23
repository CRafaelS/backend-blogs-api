//  const errorMiddleware = (err, _req, res, _next) =>
//   res.status(err.status || 500).json(
//     { message: err.message || 'Error, try again' },
// );

// module.exports = errorMiddleware;

// const constructError = (code, message) => 
//   ({ code, message: { message } }); 
//   const midError = (err, _req, res, next) => {
//      if (err) { res.status(err.code || 500).json(err.message); 
//     } 
//   next(); 
// }; 

// module.exports = { constructError, midError }; 