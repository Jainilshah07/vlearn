const { AddNoteDTO, UpdateNoteDTO, DeleteNoteDTO } = require("../dto");
const { Note } = require("../models/Note");
const { Student } = require("../models/Student");

module.exports.GetNote = async (req, res, next) => {

  if (req.user.role === "teacher") {
    const notes = await Note.find({ teacher: req.user._id });

    return res.status(200).json(notes);
  }
  else if(req.user.role === "student"){
    const notes = await Note.find({ student: req.user._id });

    return res.status(200).json(notes);
  }

  return res.status(400).json({
    message: "Something wrong with GetNote",
  });
};

module.exports.GetAllNotes = async (req, res, next) => {
  const notes = await Note.find({});

  return res.status(200).json(notes);
};

module.exports.AddNote = async (req, res, next) => {
  await AddNoteDTO.validateAsync(req.body);

  const { title, description, tag } = req.body;

  console.log(req.user);

  let note = await Note.create({
    title,
    description,
    tag,
  });

  // check if the note is being created by a teacher or student
  if (req.user.role === "teacher") {
    // update teacher's note collection
    Teacher.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { notes: note._id } },
      { new: true },
      (err, teacher) => {
        if (err)
          return res
            .status(400)
            .json({ message: "Error updating teacher's note collection" });
        note.teacher = teacher._id;
        note.save();
        return res.status(200).json(note);
      }
    );
  } else if (req.user.role === "student") {
    // update student's note collection
    Student.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { notes: note._id } },
      { new: true },
      (err, student) => {
        // console.log("Hey i am in student")
        if (err)
          return res
            .status(400)
            .json({ message: "Error updating student's note collection" });
        note.student = student._id;
        note.save();
        return res.status(200).json(note);
      }
    );
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.UpdateNote = async (req, res, next) => {
  await UpdateNoteDTO.validateAsync(req.body);

  const { title, description, tag } = req.body;

  const note = await Note.findById(_id);
  // const note = await Note.findById(_id)

  if (note) {
    note.title = title;
    note.description = description;
    note.tag = tag;

    const result = await note.save();

    if (result) {
      return res.status(200).json(result);
    }
  }
  return res.status(400).json({
    message: "Something wrong with UpdateNote",
  });
};

module.exports.DeleteNote = async (req, res, next) => {
  await DeleteNoteDTO.validateAsync(req.body);

  const { _id } = req.body;

  if (_id) {
    const note = await Note.findByIdAndDelete(_id);

    if (note) {
      return res.status(200).json(note);
    }
  }

  return res.status(400).json({
    message: "Something wrong with DeleteNote",
  });
};
