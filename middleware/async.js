module.exports = function (handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (ex) {
      // Log the exception
      next(ex);
    }
  };
};
