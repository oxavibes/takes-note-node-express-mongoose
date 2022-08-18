const mongoose = require("mongoose");
const Note = require("../models/Note");

const getAll = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json({
      status: "sucess",
      total: notes.length,
      data: {
        notes,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "There was an error while retrieving the data",
    });
  }
};

module.exports = {
    getAll,
}
