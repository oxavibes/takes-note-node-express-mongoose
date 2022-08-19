const mongoose = require("mongoose");
const Note = require("../models/Note");

module.exports = checkId = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid id",
    });
  }

  const doesNoteExists = await Note.exists({ _id: req.params.id });
 
  if (!doesNoteExists) {
    return res.status(404).json({
      status: "error",
      message: "Note doesn't exists",
    });
  }

  next();
};
