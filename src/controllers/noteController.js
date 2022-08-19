const Note = require("../models/Note");

const getAll = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json({
      status: "success",
      data: {
        notes,
        total: notes.length,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "There was an error while retrieving the data",
    });
  }
};

const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (note === null)
      return res.status(404).json({
        status: "error",
        message: "Note doesn't exists",
      });

    res.status(200).json({
      status: "success",
      data: {
        note,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Invalid data sent!",
    });
  }
};

const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        note,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
};

const updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (note === null)
      return res.status(404).json({
        status: "error",
        message: "Note doesn't exists",
      });

    res.status(200).json({
      status: "success",
      data: {
        note,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (note === null)
      return res.status(404).json({
        status: "error",
        message: "Note doesn't exists",
      });

    return res.status(201).json({});
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = {
  getAll,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
