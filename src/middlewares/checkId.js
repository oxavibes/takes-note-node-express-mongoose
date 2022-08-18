const mongoose = require("mongoose");

module.exports = checkId = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid id",
    });
  }
  
  next();
};
